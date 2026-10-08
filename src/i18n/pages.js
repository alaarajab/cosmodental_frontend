// ─────────────────────────────────────────────────────────────
// PAGE ADDRESSES in English and Spanish.
// Every page has a key (e.g. "contact") and one address per language.
// Pages without a Spanish address (legal pages) are English only.
// ─────────────────────────────────────────────────────────────

import { DENTISTS } from "../config/team.js";

// Order = order shown on the site (most requested first)
export const SERVICE_IDS = [
  "general-dentistry",
  "dental-implants",
  "cosmetic-dentistry",
  "root-canal-treatment",
  "oral-surgery",
  "pediatric-dentistry",
];

const SERVICE_SLUGS_ES = {
  "general-dentistry": "odontologia-general",
  "dental-implants": "implantes-dentales",
  "cosmetic-dentistry": "odontologia-estetica",
  "root-canal-treatment": "endodoncia",
  "oral-surgery": "cirugia-oral",
  "pediatric-dentistry": "odontopediatria",
};

export const LANGS = ["en", "es"];

export const PAGES = {
  home: { en: "/", es: "/es" },
  services: { en: "/services", es: "/es/servicios" },
  staff: { en: "/staff", es: "/es/equipo" },
  contact: { en: "/contact", es: "/es/contacto" },
  accessibility: { en: "/accessibility", es: "/es/accesibilidad" },
  privacy: { en: "/privacy-policy" },
  npp: { en: "/notice-of-privacy-practices" },
  ...Object.fromEntries(
    DENTISTS.map((d) => [`dentist:${d.slug}`, { en: `/staff/${d.slug}`, es: `/es/equipo/${d.slug}` }]),
  ),
  ...Object.fromEntries(
    SERVICE_IDS.map((id) => [
      `service:${id}`,
      { en: `/services/${id}`, es: `/es/servicios/${SERVICE_SLUGS_ES[id]}` },
    ]),
  ),
};

const clean = (pathname) => pathname.replace(/\/+$/, "") || "/";

export function langFromPath(pathname) {
  const p = clean(pathname);
  return p === "/es" || p.startsWith("/es/") ? "es" : "en";
}

// Address of a page in a language (falls back to English if there is no Spanish page)
export function pathFor(key, lang = "en") {
  const page = PAGES[key];
  if (!page) return lang === "es" ? PAGES.home.es : "/";
  return page[lang] || page.en;
}

// Which page is this address? → { key, lang } or null
export function pageFromPath(pathname) {
  const p = clean(pathname);
  for (const [key, paths] of Object.entries(PAGES)) {
    for (const lang of LANGS) {
      if (paths[lang] === p) return { key, lang };
    }
  }
  return null;
}

// Links always end with "/" — the same address as the sitemap and canonical
// tags, so Google doesn't see two versions of each page (/services and /services/).
export const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

// Address of the same page in the other language (home page if it has none)
export function switchLanguagePath(pathname) {
  const current = langFromPath(pathname);
  const target = current === "es" ? "en" : "es";
  const page = pageFromPath(pathname);
  if (page && PAGES[page.key][target]) return withSlash(PAGES[page.key][target]);
  return withSlash(PAGES.home[target]);
}
