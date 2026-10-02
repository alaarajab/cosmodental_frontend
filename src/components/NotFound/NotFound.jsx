import { Link } from "react-router-dom";
import "../Legal/Legal.css";
import { useLang } from "../../i18n";

function NotFound() {
  const { t, to } = useLang();
  return (
    <div className="legal" style={{ textAlign: "center" }}>
      <h1>{t.notFound.h1}</h1>
      <p>{t.notFound.text}</p>
      <p>
        <Link to={to("home")} className="btn btn--primary" style={{ color: "#fff" }}>
          {t.notFound.home}
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
