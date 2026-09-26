// Build step: turns the single-page app into real HTML files per page.
// Why: Google reads the content directly, every URL (e.g. /staff) exists
// as a file so no host shows a 404, and pages appear faster.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const { ROUTES, NOT_FOUND } = await import(
  pathToFileURL(path.join(root, "src/seo/routes.js")).href
);
const { CLINIC, fullAddress } = await import(
  pathToFileURL(path.join(root, "src/config/clinic.js")).href
);

const siteUrl = (process.env.SITE_URL || CLINIC.siteUrl).replace(/\/$/, "");
const basePath = (process.env.BASE_PATH || "/").replace(/\/$/, "");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Pages are saved as folder/index.html, which hosts serve at "/folder/"
const pageUrl = (p) => (p === "/" ? `${siteUrl}/` : `${siteUrl}${p}/`);

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

// Google "Dentist" structured data (local business info in search results)
const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  url: `${siteUrl}/`,
  telephone: CLINIC.phoneHref.replace("tel:", ""),
  ...(CLINIC.email ? { email: CLINIC.email } : {}),
  image: `${siteUrl}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.address.street,
    addressLocality: CLINIC.address.city,
    addressRegion: CLINIC.address.state,
    postalCode: CLINIC.address.zip,
    addressCountry: CLINIC.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC.geo.lat,
    longitude: CLINIC.geo.lng,
  },
  hasMap: CLINIC.mapsUrl,
  areaServed: [
    "Northlake, IL",
    "Chicago, IL",
    "Melrose Park, IL",
    "Elmhurst, IL",
  ],
  medicalSpecialty: "Dentistry",
  availableService: [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Endodontics (Root Canal Treatment)",
    "Pediatric Dentistry",
  ].map((name) => ({ "@type": "MedicalProcedure", name })),
  ...(CLINIC.hoursSchema.length ? { openingHours: CLINIC.hoursSchema } : {}),
  ...(CLINIC.languages.length ? { knowsLanguage: CLINIC.languages } : {}),
  ...(CLINIC.social.length ? { sameAs: CLINIC.social.map((s) => s.url) } : {}),
};

function pageHtml(route, appHtml, extraHead = "") {
  const url = pageUrl(route.path);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${esc(route.description)}" />`,
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${esc(route.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${esc(route.description)}" />`,
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${siteUrl}/og-image.png" />`,
    )
    .replace("<!--seo-extra-->", extraHead)
    .replace("<!--app-html-->", appHtml);
  return html;
}

const schemaTag = `<script type="application/ld+json">${JSON.stringify(dentistSchema)}</script>`;

for (const route of ROUTES) {
  const appHtml = render(`${basePath}${route.path}`, basePath || "/");
  const out =
    route.path === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(
    out,
    pageHtml(route, appHtml, route.path === "/" ? schemaTag : ""),
  );
  console.log("prerendered", route.path);
}

// 404 page (served automatically by Cloudflare Pages, Netlify, GitHub Pages;
// Apache/Namecheap uses the .htaccess ErrorDocument rule).
const notFoundHtml = render(
  `${basePath}/this-page-does-not-exist`,
  basePath || "/",
);
fs.writeFileSync(
  path.join(dist, "404.html"),
  pageHtml(NOT_FOUND, notFoundHtml, '<meta name="robots" content="noindex" />'),
);

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${pageUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// robots.txt
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`sitemap.xml + robots.txt written for ${siteUrl} (${fullAddress})`);
