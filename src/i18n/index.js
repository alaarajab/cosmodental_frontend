import { useLocation } from "react-router-dom";
import { CONTENT } from "./content.js";
import { langFromPath, pathFor } from "./pages.js";

export { CONTENT };

// "English, Spanish and Arabic" / "inglés, español y árabe"
export function listJoin(items, t) {
  if (items.length <= 1) return items[0] || "";
  return `${items.slice(0, -1).join(", ")} ${t.and} ${items[items.length - 1]}`;
}

export function languagesText(langs, t) {
  return listJoin(langs.map((l) => t.languageNames[l] || l), t);
}

// Current language + its text + a helper that returns page addresses
export function useLang() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return { lang, t: CONTENT[lang], to: (key) => pathFor(key, lang) };
}
