import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./SocialContactIcons.css";

function SocialContactIcons({ type }) {
  if (type === "contact") {
    return (
      <div className="social-contact-icons__contact">
        <a
          href="https://www.google.com/maps/place/NORTHLAKE+DENTAL+CLINIC"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact-icons__item"
        >
          <FaMapMarkerAlt />
          <span>159 E North Ave, Northlake, IL 60164</span>
        </a>

        <a href="tel:+17083456313" className="social-contact-icons__item">
          <FaPhoneAlt />
          <span>(708) 345-6313</span>
        </a>

        <a
          href="mailto:info@cosmodental.com"
          className="social-contact-icons__item"
        >
          <FaEnvelope />
          <span>info@cosmodental.com</span>
        </a>
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="social-contact-icons__social">
        <a
          href="#"
          aria-label="Facebook"
          className="social-contact-icons__social-link"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/dr_basel_abozor/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-contact-icons__social-link"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          aria-label="TikTok"
          className="social-contact-icons__social-link"
        >
          <FaTiktok />
        </a>
      </div>
    );
  }

  return null;
}

export default SocialContactIcons;
