import "./Footer.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import SocialContactIcons from "../SocialContactIcons/SocialContactIcons";
import { CLINIC, fullAddress } from "../../config/clinic";
import mapImage from "../../assets/medium-screen.webp";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Contact */}
        <section className="footer__col" aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="footer__heading">
            Contact Us
          </h2>
          <ul className="footer__list">
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.address.street}
                <br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
                <span className="visually-hidden"> (opens Google Maps in a new tab)</span>
              </a>
            </li>
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
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
            Office Hours
          </h2>
          {CLINIC.hours.length ? (
            <dl className="footer__hours">
              {CLINIC.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="footer__text">
              <FaClock aria-hidden="true" /> Please call{" "}
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a> for our current hours.
            </p>
          )}
        </section>

        {/* Links */}
        <nav className="footer__col" aria-labelledby="footer-links">
          <h2 id="footer-links" className="footer__heading">
            Quick Links
          </h2>
          <ul className="footer__list footer__list--plain">
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/staff">Our Team</Link></li>
            <li><Link to="/contact">Book an Appointment</Link></li>
            <li><Link to="/notice-of-privacy-practices">Notice of Privacy Practices</Link></li>
            <li><Link to="/privacy-policy">Website Privacy Policy</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
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
              alt={`Map showing ${CLINIC.name} at ${fullAddress}. Opens Google Maps in a new tab.`}
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__disclaimer">
          The information on this website is for general educational purposes only
          and is not medical or dental advice. Please consult a dentist about your
          individual needs. For a dental emergency, call our office; for a medical
          emergency, call 911.
        </p>
        <div className="footer__bottom-row">
          <p>
            © {year} {CLINIC.name}. All rights reserved.
          </p>
          <SocialContactIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
