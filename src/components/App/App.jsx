import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Staff from "../Staff/Staff";
import Seo from "../Seo/Seo";
import DisplayOptions from "../DisplayOptions/DisplayOptions";
import PrivacyPolicy from "../Legal/PrivacyPolicy";
import NoticeOfPrivacyPractices from "../Legal/NoticeOfPrivacyPractices";
import Accessibility from "../Legal/Accessibility";
import NotFound from "../NotFound/NotFound";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { ROUTES } from "../../seo/routes";
import { useLang } from "../../i18n";

// Which component shows each page (same component for both languages)
function pageElement(key) {
  if (key.startsWith("service:")) return <ServiceDetail id={key.slice(8)} />;
  switch (key) {
    case "home":
      return <Home />;
    case "services":
      return <Services />;
    case "staff":
      return <Staff />;
    case "contact":
      return <Contact />;
    case "privacy":
      return <PrivacyPolicy />;
    case "npp":
      return <NoticeOfPrivacyPractices />;
    case "accessibility":
      return <Accessibility />;
    default:
      return <NotFound />;
  }
}

function App() {
  const { pathname } = useLocation();
  const { t } = useLang();
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // On page change: scroll to top and move focus to the new content,
  // so screen-reader and keyboard users know the page changed.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>
      <Seo />
      <div className="page__content">
        <DisplayOptions />
        <Header />

        <main id="main" ref={mainRef} tabIndex={-1}>
          <Routes>
            {ROUTES.map((r) => (
              <Route key={r.path} path={r.path} element={pageElement(r.key)} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
