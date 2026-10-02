import "./Footer.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import SocialContactIcons from "../SocialContactIcons/SocialContactIcons";
import { CLINIC, fullAddress } from "../../config/clinic";
import mapImage from "../../assets/medium-screen.webp";
import { useLang } from "../../i18n";

function Footer() {
  const year = new Date().getFullYear();
  const { lang, t, to } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Contact */}
        <section className="footer__col" aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="footer__heading">
            {f.contact}
          </h2>
          <ul className="footer__list">
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.address.street}
                <br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
                <span className="visually-hidden">{t.ui.mapsNewTab}</span>
              </a>
            </li>
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <span>
                <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
                <br />
                <small className="relay-note">{t.ui.relay}</small>
              </span>
            </li>
            {CLINIC.email && (
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
              </li>
            )}
          </ul>
        </section>

        {/* Hours */}
        <section className="footer__col" aria-labelledby="footer-hours">
          <h2 id="footer-hours" className="footer__heading">
            {f.hours}
          </h2>
          {CLINIC.hours.length ? (
            <dl className="footer__hours">
              {CLINIC.hours.map((h) => (
                <div key={h.days}>
                  <dt>{lang === "es" ? h.daysEs || h.days : h.days}</dt>
                  <dd>{lang === "es" ? h.timeEs || h.time : h.time}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="footer__text">
              <FaClock aria-hidden="true" /> {f.callForHours[0]}
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
              {f.callForHours[1]}
            </p>
          )}
        </section>

        {/* Links */}
        <nav className="footer__col" aria-labelledby="footer-links">
          <h2 id="footer-links" className="footer__heading">
            {f.links}
          </h2>
          <ul className="footer__list footer__list--plain">
            <li><Link to={to("services")}>{t.ui.nav.services}</Link></li>
            <li><Link to={to("staff")}>{t.ui.nav.staff}</Link></li>
            <li><Link to={to("contact")}>{t.ui.bookAn}</Link></li>
            <li>
              <Link to={to("npp")} hrefLang={lang === "es" ? "en" : undefined}>
                {f.npp}
              </Link>
            </li>
            <li>
              <Link to={to("privacy")} hrefLang={lang === "es" ? "en" : undefined}>
                {f.privacy}
              </Link>
            </li>
            <li><Link to={to("accessibility")}>{f.accessibility}</Link></li>
          </ul>
        </nav>

        {/* Map */}
        <div className="footer__col">
          <a
            className="footer__map"
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapImage}
              alt={f.mapAlt(fullAddress)}
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__disclaimer">{f.disclaimer}</p>
        <div className="footer__bottom-row">
          <p>
            © {year} {CLINIC.name}. {f.rights}
          </p>
          <SocialContactIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
