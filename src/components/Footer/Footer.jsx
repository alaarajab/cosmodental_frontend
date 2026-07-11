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
              href="https://www.google.com/maps/dir/42.0191328,-88.12734/COSMO+DENTAL,+159+E+North+Ave,+Northlake,+IL+60164/@41.9627145,-88.0940353,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x880fb50027954c83:0xf7aecbc5ef93eb86!2m2!1d-87.8963596!2d41.9068265!3e0?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
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
