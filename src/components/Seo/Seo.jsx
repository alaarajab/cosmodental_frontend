import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findRoute } from "../../seo/routes";
import { CLINIC } from "../../config/clinic";
import { CONTENT } from "../../i18n";

const pageUrl = (p) => `${CLINIC.siteUrl}${p === "/" ? "/" : `${p}/`}`;

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <html lang>, <title>, description, canonical and language links in
// sync when visitors move between pages inside the app. (The prerender
// step writes the same values into each page's HTML for Google.)
function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);
    const url = pageUrl(route.path);
    document.documentElement.lang = route.lang;
    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", CONTENT[route.lang].locale);

    // <link rel="alternate" hreflang="…"> for the English/Spanish versions
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    const alts = route.alternates || {};
    if (alts.en && alts.es) {
      for (const [lang, path] of [["en", alts.en], ["es", alts.es], ["x-default", alts.en]]) {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = lang;
        link.href = pageUrl(path);
        document.head.appendChild(link);
      }
    }
  }, [pathname]);

  return null;
}

export default Seo;
