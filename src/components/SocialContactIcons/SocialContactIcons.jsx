import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLink } from "react-icons/fa";
import { CLINIC } from "../../config/clinic";
import "./SocialContactIcons.css";
import { useLang } from "../../i18n";

const ICONS = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

// Shows only the social accounts listed in src/config/clinic.js
function SocialContactIcons() {
  const { t } = useLang();
  if (!CLINIC.social.length) return null;

  return (
    <ul className="social-icons" aria-label={t.footer.social}>
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
                {t.footer.onSocial(label)}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialContactIcons;
