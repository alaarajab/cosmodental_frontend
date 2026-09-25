import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./components/App/App.jsx";

// Used only at build time to prerender each page to static HTML.
export function render(url, basename) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url} basename={basename}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
