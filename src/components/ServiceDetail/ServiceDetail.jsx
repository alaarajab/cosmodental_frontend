import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";
import "./ServiceDetail.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { CLINIC } from "../../config/clinic";
import { SERVICE_IMAGES } from "../../config/serviceImages";
import { SERVICE_IDS } from "../../i18n/pages";
import { useLang } from "../../i18n";

// One page per service, e.g. /services/dental-implants/ and
// /es/servicios/implantes-dentales/. Text lives in src/i18n/en.js / es.js.
function ServiceDetail({ id }) {
  const { t, to } = useLang();
  const s = t.services[id];
  const p = t.servicePage;
  const others = SERVICE_IDS.filter((other) => other !== id);

  return (
    <article className="service-page">
      <Breadcrumbs
        items={[
          { label: t.ui.nav.home, to: to("home") },
          { label: t.ui.nav.services, to: to("services") },
          { label: s.name },
        ]}
      />

      <header className="service-page__hero">
        <div>
          <h1>{s.name}</h1>
          {s.intro.map((para) => (
            <p key={para.slice(0, 40)} className="service-page__lead">
              {para}
            </p>
          ))}
          <div className="service-page__actions">
            <Link to={to("contact")} className="btn btn--primary">
              {t.ui.book}
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn--outline">
              <FaPhoneAlt aria-hidden="true" />
              {t.ui.call} {CLINIC.phone}
            </a>
          </div>
        </div>
        <img
          src={SERVICE_IMAGES[id]}
          alt=""
          className="service-page__image"
          width="560"
          height="360"
        />
      </header>

      <div className="service-page__grid">
        <section className="service-page__card" aria-labelledby="includes-title">
          <h2 id="includes-title">{p.includes}</h2>
          <ul className="service-page__checks">
            {s.includes.map((item) => (
              <li key={item}>
                <FaCheck aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-page__card" aria-labelledby="when-title">
          <h2 id="when-title">{s.whenTitle}</h2>
          <ul className="service-page__bullets">
            {s.when.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="service-page__section" aria-labelledby="steps-title">
        <h2 id="steps-title">{p.stepsTitle}</h2>
        <ol className="service-page__steps">
          {s.steps.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-page__section" aria-labelledby="faq-title">
        <h2 id="faq-title">{p.faqTitle}</h2>
        <div className="service-page__faq">
          {s.faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                <h3>{q}</h3>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-page__cta" aria-labelledby="service-cta-title">
        <h2 id="service-cta-title">{p.ctaTitle}</h2>
        <p>{p.ctaText}</p>
        <div className="service-page__actions service-page__actions--center">
          <Link to={to("contact")} className="btn btn--light">
            {t.ui.book}
          </Link>
          <a href={CLINIC.phoneHref} className="btn btn--cta-outline">
            <FaPhoneAlt aria-hidden="true" />
            {t.ui.call} {CLINIC.phone}
          </a>
        </div>
      </section>

      <nav className="service-page__others" aria-labelledby="others-title">
        <h2 id="others-title">{p.otherServices}</h2>
        <ul>
          {others.map((other) => (
            <li key={other}>
              <Link to={to(`service:${other}`)}>{t.services[other].name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

export default ServiceDetail;
