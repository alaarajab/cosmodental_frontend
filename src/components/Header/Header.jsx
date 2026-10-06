import "./Header.css";
import logo from "../../assets/cosmo_dental_logo_220x80.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { CLINIC } from "../../config/clinic";
import { useLang } from "../../i18n";
import { pageFromPath, SERVICE_IDS } from "../../i18n/pages";

const MENU_KEYS = ["home", "services", "staff", "contact"];

function Header() {
  const location = useLocation();
  const { t, to } = useLang();
  const currentKey = pageFromPath(location.pathname)?.key || "";
  const isHome = currentKey === "home";
  const onServicePage = currentKey === "services" || currentKey.startsWith("service:");
  const serviceLinks = SERVICE_IDS.map((id) => ({
    path: to(`service:${id}`),
    label: t.services[id].name,
    current: currentKey === `service:${id}`,
  }));
  const menuLinks = MENU_KEYS.map((key) => ({
    key,
    path: to(key),
    label: t.ui.nav[key],
    // "Services" stays highlighted on each service page
    end: key === "home",
  }));

  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const [navigatorStyle, setNavigatorStyle] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Services dropdown: close on outside click or Escape
  useEffect(() => {
    if (!isServicesOpen) return undefined;
    const onClick = (e) => {
      if (!servicesRef.current?.contains(e.target)) setIsServicesOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isServicesOpen]);

  // Close the dropdown when focus leaves it (keyboard users tabbing past)
  const onServicesBlur = (e) => {
    if (!servicesRef.current?.contains(e.relatedTarget)) setIsServicesOpen(false);
  };

  const closeMobileMenu = (returnFocus = false) => {
    setIsMobileMenuOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  };

  // Desktop menu underline animation
  useEffect(() => {
    const activeLink = menuRef.current?.querySelector(
      ".header__menu-item.active",
    );
    const container = menuRef.current?.querySelector(".header__menu-desktop");
    if (activeLink && container) {
      // measured against the menu, so it also works for the Services dropdown button
      const left = activeLink.getBoundingClientRect().left - container.getBoundingClientRect().left;
      setNavigatorStyle({
        width: `${activeLink.offsetWidth}px`,
        transform: `translateX(${left}px)`,
      });
    } else {
      setNavigatorStyle({ width: 0 });
    }
  }, [location.pathname]);

  // Mobile menu: show the services list already open when on a service page
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileServicesOpen(onServicePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen]);

  // Close the menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Mobile menu: focus first link, close with Escape, keep Tab inside
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const menu = mobileMenuRef.current;
    menu?.querySelector("a, button")?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu(true);
      } else if (e.key === "Tab") {
        // Re-read every time: the Services sub-list can open and close
        const focusables = mobileMenuRef.current?.querySelectorAll("a, button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isHome ? "header--home" : "header--page"}`}>
      <div className="header__spacer">
        <Link
          to={to("home")}
          className="header__logo-link"
          aria-label={t.ui.homeLink}
        >
          <img
            className="header__logo"
            src={logo}
            alt={`${CLINIC.name} logo`}
            width="220"
            height="60"
          />
        </Link>

        <nav className="header__menu" ref={menuRef} aria-label={t.ui.mainNav}>
          {/* Desktop Menu */}
          <div className="header__menu-desktop">
            {menuLinks.map(({ key, path, label, end }) =>
              key === "services" ? (
                <div
                  key={key}
                  className="header__dropdown"
                  ref={servicesRef}
                  onBlur={onServicesBlur}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    className={`header__menu-item header__dropdown-btn ${onServicePage ? "active" : ""}`}
                    aria-expanded={isServicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setIsServicesOpen((open) => !open)}
                  >
                    {label}
                    <FaChevronDown aria-hidden="true" className="header__chevron" />
                  </button>
                  <ul
                    id="services-menu"
                    className="header__dropdown-list"
                    hidden={!isServicesOpen}
                  >
                    {serviceLinks.map((s) => (
                      <li key={s.path}>
                        <Link to={s.path} aria-current={s.current ? "page" : undefined}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  key={key}
                  to={path}
                  end={end}
                  className={({ isActive }) =>
                    `header__menu-item ${isActive ? "active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ),
            )}

            <a
              href={CLINIC.phoneHref}
              className="btn btn--primary header__call-us"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>
                <span className="visually-hidden">{t.ui.callUsAt}</span>
                {CLINIC.phone}
              </span>
            </a>


            <span
              className="header__navigator"
              style={navigatorStyle}
              aria-hidden="true"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="header__menu-mobile-btn"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? t.ui.closeMenu : t.ui.openMenu}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <FaBars aria-hidden="true" />
          </button>
        </nav>
      </div>

      {/* Mobile menu & overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="header__mobile-overlay"
            aria-hidden="true"
            onClick={() => closeMobileMenu(true)}
          />
          <nav
            id="mobile-menu"
            className="header__mobile-menu"
            ref={mobileMenuRef}
            aria-label={t.ui.mobileNav}
          >
            <button
              type="button"
              className="header__mobile-close"
              aria-label={t.ui.closeMenu}
              onClick={() => closeMobileMenu(true)}
            >
              <FaTimes aria-hidden="true" />
            </button>
            {menuLinks.map(({ key, path, label, end }) =>
              key === "services" ? (
                <div key={key} className="header__mobile-group">
                  <button
                    type="button"
                    className={`header__mobile-toggle ${onServicePage ? "active" : ""}`}
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setIsMobileServicesOpen((open) => !open)}
                  >
                    {label}
                    <FaChevronDown aria-hidden="true" className="header__chevron" />
                  </button>
                  <ul
                    id="mobile-services"
                    className="header__mobile-sublist"
                    hidden={!isMobileServicesOpen}
                  >
                    {serviceLinks.map((s) => (
                      <li key={s.path}>
                        <Link to={s.path} aria-current={s.current ? "page" : undefined}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink key={key} to={path} end={end}>
                  {label}
                </NavLink>
              ),
            )}
            <a
              href={CLINIC.phoneHref}
              className="btn btn--primary header__call-us--mobile"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>
                {t.ui.call} <span className="nowrap">{CLINIC.phone}</span>
              </span>
            </a>
          </nav>
        </>
      )}

      {isHome ? (
        <div className="header__hero">
          <h1 className="header__headline">
            {CLINIC.name}
            <span className="header__headline-sub">
              <span className="visually-hidden">, </span>{t.header.sub}
            </span>
          </h1>
          <p className="header__subtitle">{t.header.subtitle}</p>
          <div className="header__actions">
            <Link to={to("contact")} className="btn btn--primary">
              {t.ui.book}
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn--light">
              <FaPhoneAlt aria-hidden="true" />
              {t.ui.call} {CLINIC.phone}
            </a>
          </div>
        </div>
      ) : (
        <div className="header__hero header__hero--compact">
          <p className="header__tagline">{CLINIC.name}</p>
          <Link to={to("contact")} className="btn btn--primary">
            {t.ui.book}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
