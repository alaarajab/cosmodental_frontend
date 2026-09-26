import "./Header.css";
import logo from "../../assets/cosmo_dental_logo_220x80.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { CLINIC } from "../../config/clinic";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/staff", label: "Our Team" },
  { path: "/contact", label: "Contact" },
];

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const [navigatorStyle, setNavigatorStyle] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = (returnFocus = false) => {
    setIsMobileMenuOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  };

  // Desktop menu underline animation
  useEffect(() => {
    const activeLink = menuRef.current?.querySelector(
      ".header__menu-item.active",
    );
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setNavigatorStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    } else {
      setNavigatorStyle({ width: 0 });
    }
  }, [location.pathname]);

  // Close the menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Mobile menu: focus first link, close with Escape, keep Tab inside
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const menu = mobileMenuRef.current;
    const focusables = menu?.querySelectorAll("a, button");
    focusables?.[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu(true);
      } else if (e.key === "Tab" && focusables?.length) {
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
          to="/"
          className="header__logo-link"
          aria-label={`${CLINIC.name} – Home`}
        >
          <img
            className="header__logo"
            src={logo}
            alt=""
            width="220"
            height="60"
          />
        </Link>

        <nav className="header__menu" ref={menuRef} aria-label="Main">
          {/* Desktop Menu */}
          <div className="header__menu-desktop">
            {menuLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `header__menu-item ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}

            <a
              href={CLINIC.phoneHref}
              className="btn btn--primary header__call-us"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>
                <span className="visually-hidden">Call us at </span>
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
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
            aria-label="Mobile"
          >
            <button
              type="button"
              className="header__mobile-close"
              aria-label="Close menu"
              onClick={() => closeMobileMenu(true)}
            >
              <FaTimes aria-hidden="true" />
            </button>
            {menuLinks.map(({ path, label }) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {label}
              </NavLink>
            ))}
            <a
              href={CLINIC.phoneHref}
              className="btn btn--primary header__call-us--mobile"
            >
              <FaPhoneAlt aria-hidden="true" />
              Call {CLINIC.phone}
            </a>
          </nav>
        </>
      )}

      {isHome ? (
        <div className="header__hero">
          <h1 className="header__headline">Cosmo Dental Clinic</h1>
          <p className="header__subtitle">
            Family, cosmetic and implant dentistry for Northlake and the greater
            Chicago area. New patients are always welcome.
          </p>
          <div className="header__actions">
            <Link to="/contact" className="btn btn--primary">
              Book Appointment
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn--light">
              <FaPhoneAlt aria-hidden="true" />
              Call {CLINIC.phone}
            </a>
          </div>
        </div>
      ) : (
        <div className="header__hero header__hero--compact">
          <p className="header__tagline">{CLINIC.name}</p>
          <Link to="/contact" className="btn btn--primary">
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
