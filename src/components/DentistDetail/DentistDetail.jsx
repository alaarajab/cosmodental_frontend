import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./DentistDetail.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import placeholderImg from "../../assets/character.jpg";
import { CLINIC } from "../../config/clinic";
import { DENTISTS } from "../../config/team";
import { useLang } from "../../i18n";

// One page per dentist, e.g. /staff/dr-basel-abozor/ and
// /es/equipo/dr-basel-abozor/ — so a Google search for the dentist's
// name finds the clinic. Dentist details live in src/config/team.js.
function DentistDetail({ slug }) {
  const { lang, t, to } = useLang();
  const d = DENTISTS.find((x) => x.slug === slug);
  const p = t.dentistPage;
  const bio = lang === "es" ? d.bioEs || d.bio : d.bio;
  const others = DENTISTS.filter((x) => x.slug !== slug);

  return (
    <article className="dentist-page">
      <Breadcrumbs
        items={[
          { label: t.ui.nav.home, to: to("home") },
          { label: t.ui.nav.staff, to: to("staff") },
          { label: d.name },
        ]}
      />

      <header className="dentist-page__hero">
        <img
          src={d.image || placeholderImg}
          alt={d.image ? t.home.portrait(d.name) : ""}
          className="dentist-page__photo"
          width="300"
          height="272"
        />
        <div>
          <h1>{d.name}</h1>
          <p className="dentist-page__role">{p.role}</p>
          <p className="dentist-page__bio">{bio}</p>
          <p>{p.intro(d.name)}</p>
          <div className="dentist-page__actions">
            <Link to={to("contact")} className="btn btn--primary">
              {p.bookWith(d.name)}
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn--outline">
              <FaPhoneAlt aria-hidden="true" />
              {t.ui.call} {CLINIC.phone}
            </a>
          </div>
        </div>
      </header>

      <div className="dentist-page__grid">
        {d.focus?.length > 0 && (
          <section className="dentist-page__card" aria-labelledby="focus-title">
            <h2 id="focus-title">{p.focusTitle}</h2>
            <ul className="dentist-page__links">
              {d.focus.map((id) => (
                <li key={id}>
                  <Link to={to(`service:${id}`)}>{t.services[id].name}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="dentist-page__card" aria-labelledby="visit-title">
          <h2 id="visit-title">
            {p.visitTitle} {d.name}
          </h2>
          <ul className="dentist-page__info">
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.name}, {CLINIC.address.street}, {CLINIC.address.city}, {CLINIC.address.state}{" "}
                {CLINIC.address.zip}
                <span className="visually-hidden">{t.ui.mapsNewTab}</span>
              </a>
            </li>
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
            </li>
            {CLINIC.hours.length > 0 && (
              <li>
                <FaClock aria-hidden="true" />
                <span>
                  {CLINIC.hours.map((h) => (
                    <span key={h.days} className="dentist-page__hours">
                      {lang === "es" ? h.daysEs || h.days : h.days}:{" "}
                      {lang === "es" ? h.timeEs || h.time : h.time}
                    </span>
                  ))}
                </span>
              </li>
            )}
          </ul>
        </section>
      </div>

      <nav className="dentist-page__others" aria-labelledby="others-title">
        <h2 id="others-title">{p.otherDentists}</h2>
        <ul>
          {others.map((o) => (
            <li key={o.slug}>
              <Link to={to(`dentist:${o.slug}`)}>{o.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

export default DentistDetail;
