import "./Footer.css";
import SocialContactIcons from "../SocialContactIcons/SocialContactIcons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <>
      {/* Main Footer with Google Map Background */}
      <footer className="footer">
        {/* Clinic Address Button */}
        <div className="footer__address">
          <button
            className="footer__address-btn"
            onClick={() => setShowAddress(!showAddress)}
          >
            Clinic Address
          </button>

          {/* Location Icon */}
          <FaMapMarkerAlt
            className="footer__address-icon"
            onClick={() => setShowAddress(!showAddress)}
          />

          {showAddress && (
            <a
              href="https://www.google.com/maps/place/NORTHLAKE+DENTAL+CLINIC"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__address-popup"
            >
              159 E North Ave
              <br />
              Northlake, IL 60164
            </a>
          )}
        </div>
      </footer>

      {/* Footer Bottom with gray background */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Cosmo Dental Clinic. All rights reserved.
        </p>
        <div className="footer__bottom-social">
          <SocialContactIcons type="social" />
        </div>
      </div>
    </>
  );
}

export default Footer;
