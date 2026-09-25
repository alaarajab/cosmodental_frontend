import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findRoute } from "../../seo/routes";
import { CLINIC } from "../../config/clinic";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <title>, description and canonical in sync when visitors
// navigate inside the app. (The prerender step writes the same values
// into each page's HTML for Google.)
function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);
    const url = `${CLINIC.siteUrl}${route.path === "/" ? "/" : `${route.path}/`}`;
    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);

  return null;
}

export default Seo;
