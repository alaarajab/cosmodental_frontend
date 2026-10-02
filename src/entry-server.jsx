import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./components/App/App.jsx";

// Used only at build time (scripts/prerender.mjs) to turn each page into
// static HTML and to build the SEO files.
export function render(url, basename) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url} basename={basename}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}

export { ROUTES, notFoundRoute } from "./seo/routes.js";
export { schemasFor, buildLlmsTxt } from "./seo/schema.js";
export { CLINIC, fullAddress } from "./config/clinic.js";
export { CONTENT } from "./i18n/content.js";
