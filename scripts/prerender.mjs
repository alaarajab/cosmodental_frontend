// Build step: turns the single-page app into real HTML files per page,
// in English and Spanish. Why: Google and AI assistants read the content
// directly, every address (e.g. /es/servicios/) exists as a file, and
// pages appear faster. Also writes sitemap.xml, robots.txt and llms.txt.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, ROUTES, notFoundRoute, schemasFor, buildLlmsTxt, CLINIC, CONTENT, fullAddress } =
  await import(pathToFileURL(ssrEntry).href);

const siteUrl = (process.env.SITE_URL || CLINIC.siteUrl).replace(/\/$/, "");
const basePath = (process.env.BASE_PATH || "/").replace(/\/$/, "");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Pages are saved as folder/index.html, which hosts serve at "/folder/"
const pageUrl = (p) => (p === "/" ? `${siteUrl}/` : `${siteUrl}${p}/`);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// JSON inside <script> must not contain "</script>"
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

function alternateLinks(route) {
  const a = route.alternates || {};
  if (!a.en || !a.es) return "";
  return [
    `<link rel="alternate" hreflang="en" href="${pageUrl(a.en)}" />`,
    `<link rel="alternate" hreflang="es" href="${pageUrl(a.es)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(a.en)}" />`,
  ].join("\n    ");
}

function pageHtml(route, appHtml, extraHead = "") {
  const url = pageUrl(route.path);
  const locale = CONTENT[route.lang].locale;
  const otherLocale = route.lang === "es" ? CONTENT.en.locale : CONTENT.es.locale;
  const hasOther = route.alternates?.en && route.alternates?.es;
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${route.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(route.description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(
      /<meta property="og:locale"[^>]*>/,
      `<meta property="og:locale" content="${locale}" />` +
        (hasOther ? `\n    <meta property="og:locale:alternate" content="${otherLocale}" />` : ""),
    )
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(route.title)}" />`)
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${esc(route.description)}" />`,
    )
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${siteUrl}/og-image.png" />`)
    .replace("<!--seo-extra-->", [alternateLinks(route), extraHead].filter(Boolean).join("\n    "))
    .replace("<!--app-html-->", appHtml);
}

for (const route of ROUTES) {
  const appHtml = render(`${basePath}${route.path === "/" ? "/" : route.path}`, basePath || "/");
  const out =
    route.path === "/" ? path.join(dist, "index.html") : path.join(dist, route.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const schema = schemasFor(route, siteUrl).map(jsonLd).join("\n    ");
  fs.writeFileSync(out, pageHtml(route, appHtml, schema));
  console.log("prerendered", route.path);
}

// 404 page (Cloudflare serves it for unknown addresses)
const notFoundHtml = render(`${basePath}/this-page-does-not-exist`, basePath || "/");
fs.writeFileSync(
  path.join(dist, "404.html"),
  pageHtml(notFoundRoute("en"), notFoundHtml, '<meta name="robots" content="noindex" />'),
);

// sitemap.xml (with English/Spanish alternates)
const today = new Date().toISOString().slice(0, 10);
const altXml = (r) =>
  r.alternates?.en && r.alternates?.es
    ? ["en", "es"]
        .map((l) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(r.alternates[l])}" />`)
        .join("") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(r.alternates.en)}" />`
    : "";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ROUTES.map(
  (r) => `  <url>
    <loc>${pageUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>${altXml(r)}
  </url>`,
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// robots.txt — open to search engines and AI assistants
const aiBots = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
];
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `# Search engines and AI assistants are welcome to read this site.\n` +
    aiBots.map((b) => `User-agent: ${b}`).join("\n") +
    `\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

// llms.txt — plain-text summary for AI assistants
fs.writeFileSync(path.join(dist, "llms.txt"), buildLlmsTxt(siteUrl));

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`${ROUTES.length} pages + sitemap.xml, robots.txt, llms.txt written for ${siteUrl} (${fullAddress})`);
