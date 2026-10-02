import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ContactForm from "../ContactForm/ContactForm";
import { CLINIC } from "../../config/clinic";
import "./Contact.css";
import { useLang } from "../../i18n";

function Contact() {
  const { lang, t } = useLang();
  const p = t.contactPage;
  return (
    <div className="contact">
      <h1 className="contact__title">{p.h1}</h1>
      <p className="contact__intro">
        {p.intro}
        <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>.
      </p>

      <div className="contact__layout">
        <ContactForm />

        <aside className="contact__info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">{p.office}</h2>
          <ul>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.address.street}, {CLINIC.address.city}, {CLINIC.address.state}{" "}
                {CLINIC.address.zip}
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
            <li>
              <FaClock aria-hidden="true" />
              {CLINIC.hours.length ? (
                <span>
                  {CLINIC.hours.map((h) => (
                    <span key={h.days} className="contact__hours-row">
                      {lang === "es" ? h.daysEs || h.days : h.days}:{" "}
                      {lang === "es" ? h.timeEs || h.time : h.time}
                    </span>
                  ))}
                </span>
              ) : (
                <span>{t.ui.hoursCall}</span>
              )}
            </li>
          </ul>
          <p className="contact__emergency">
            <strong>{p.emergency}</strong> {p.emergencyText}
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
