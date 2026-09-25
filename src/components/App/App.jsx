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
import PrivacyPolicy from "../Legal/PrivacyPolicy";
import NoticeOfPrivacyPractices from "../Legal/NoticeOfPrivacyPractices";
import Accessibility from "../Legal/Accessibility";
import NotFound from "../NotFound/NotFound";

function App() {
  const { pathname } = useLocation();
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
        Skip to main content
      </a>
      <Seo />
      <div className="page__content">
        <Header />

        <main id="main" ref={mainRef} tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/notice-of-privacy-practices"
              element={<NoticeOfPrivacyPractices />}
            />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
