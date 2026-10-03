// Page titles + descriptions for Google, in English and Spanish
// (also used to build the sitemap). Texts live in src/i18n/en.js / es.js.
import { PAGES, LANGS, SERVICE_IDS, langFromPath, pageFromPath } from "../i18n/pages.js";
import { CONTENT } from "../i18n/content.js";
import { DENTISTS } from "../config/team.js";

const PRIORITY = {
  home: "1.0",
  services: "0.9",
  contact: "0.9",
  staff: "0.8",
  // dentist pages use the default 0.8
  accessibility: "0.3",
  privacy: "0.3",
  npp: "0.3",
};

function metaFor(key, lang) {
  const t = CONTENT[lang];
  if (key.startsWith("service:")) {
    const s = t.services[key.slice(8)];
    return { title: s.metaTitle, description: s.metaDescription };
  }
  if (key.startsWith("dentist:")) {
    const d = DENTISTS.find((x) => `dentist:${x.slug}` === key);
    const bio = lang === "es" ? d.bioEs || d.bio : d.bio;
    return { title: t.dentistPage.metaTitle(d.name), description: t.dentistPage.metaDescription(d.name, bio) };
  }
  return t.meta[key] || CONTENT.en.meta[key];
}

export const ROUTES = [];
for (const [key, paths] of Object.entries(PAGES)) {
  for (const lang of LANGS) {
    if (!paths[lang]) continue;
    ROUTES.push({
      key,
      lang,
      path: paths[lang],
      alternates: paths,
      ...metaFor(key, lang),
      priority: PRIORITY[key] || "0.8",
    });
  }
}

export { SERVICE_IDS };

export function notFoundRoute(lang = "en") {
  return { key: "notFound", lang, path: "/404", alternates: {}, ...CONTENT[lang].meta.notFound };
}

export const NOT_FOUND = notFoundRoute("en");

export function findRoute(pathname) {
  const page = pageFromPath(pathname);
  if (!page) return notFoundRoute(langFromPath(pathname));
  return ROUTES.find((r) => r.key === page.key && r.lang === page.lang);
}
