import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLink } from "react-icons/fa";
import { CLINIC } from "../../config/clinic";
import "./SocialContactIcons.css";

const ICONS = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

// Shows only the social accounts listed in src/config/clinic.js
function SocialContactIcons() {
  if (!CLINIC.social.length) return null;

  return (
    <ul className="social-icons" aria-label="Social media">
      {CLINIC.social.map(({ label, url }) => {
        const Icon = ICONS[label] || FaLink;
        return (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icons__link"
            >
              <Icon aria-hidden="true" />
              <span className="visually-hidden">
                {CLINIC.shortName} on {label} (opens in a new tab)
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialContactIcons;
