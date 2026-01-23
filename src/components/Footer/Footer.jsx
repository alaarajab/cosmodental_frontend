import "./Footer.css";
import logo from "../../assets/header-logo-cosmo-logo.png";
import { NavLink } from "react-router-dom";
import SocialContactIcons from "../SocialContactIcons/SocialContactIcons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="Cosmo Dental Clinic logo" />
          <p>
            Cosmo Dental Clinic provides high-quality dental care with a
            patient-first approach.
          </p>
        </div>

        <nav className="footer__links">
          <h3>Quick Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/staff">Our Staff</NavLink>
          <NavLink to="/services">Services</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="footer__contact">
          <h3>Contact Us</h3>
          <SocialContactIcons type="contact" />
        </div>

        <div className="footer__social">
          <h3>Follow Us</h3>
          <SocialContactIcons type="social" />
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Cosmo Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
