import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ContactForm from "../ContactForm/ContactForm";
import { CLINIC } from "../../config/clinic";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us &amp; Request an Appointment</h1>
      <p className="contact__intro">
        Send us a request and our team will call or email you to confirm a time.
        Prefer to talk? Call us at <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>.
      </p>

      <div className="contact__layout">
        <ContactForm />

        <aside className="contact__info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">Our Office</h2>
          <ul>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.address.street}, {CLINIC.address.city}, {CLINIC.address.state}{" "}
                {CLINIC.address.zip}
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
            <li>
              <FaClock aria-hidden="true" />
              {CLINIC.hours.length ? (
                <span>
                  {CLINIC.hours.map((h) => (
                    <span key={h.days} className="contact__hours-row">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              ) : (
                <span>Call us for current office hours.</span>
              )}
            </li>
          </ul>
          <p className="contact__emergency">
            <strong>Dental emergency?</strong> Please call our office directly.
            For a medical emergency, call 911.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
