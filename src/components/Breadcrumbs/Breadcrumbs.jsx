import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import { useLang } from "../../i18n";

// Visible "Home › Services › Dental Implants" trail.
// items: [{ label, to }] — the last item is the current page (no link).
function Breadcrumbs({ items }) {
  const { t } = useLang();
  return (
    <nav className="breadcrumbs" aria-label={t.ui.breadcrumb}>
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label}>
              {last ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
