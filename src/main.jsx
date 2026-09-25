import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// BASE_URL is "/" on the real domain, or "/cosmodental_frontend/" on GitHub Pages.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const container = document.getElementById("root");

// Pages are prerendered at build time; attach React to the existing HTML.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
