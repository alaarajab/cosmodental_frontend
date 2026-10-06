import { Link } from "react-router-dom";
import "./Services.css";
import { SERVICE_IMAGES } from "../../config/serviceImages";
import { SERVICE_IDS } from "../../i18n/pages";
import { useLang } from "../../i18n";

function Services() {
  const { t, to } = useLang();
  const p = t.servicesPage;

  return (
    <div className="services">
      <h1 className="services__title">{p.h1}</h1>
      <p className="services__intro">{p.intro}</p>

      <ul className="services__list">
        {SERVICE_IDS.map((id) => {
          const s = t.services[id];
          return (
            // id keeps old links like /services#dental-implants working
            <li className="service" key={id} id={id}>
              <img
                src={SERVICE_IMAGES[id]}
                alt={t.services[id].imageAlt}
                className="service__image"
                width="320"
                height="240"
                loading="lazy"
              />
              <div className="service__content">
                <h2>
                  <Link to={to(`service:${id}`)} className="service__title-link">
                    {s.name}
                  </Link>
                </h2>
                <p>{s.intro[0]}</p>
                <h3 className="service__subheading">{p.treatments}</h3>
                <ul>
                  {s.includes.slice(0, 4).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <Link to={to(`service:${id}`)} className="btn btn--outline service__more">
                  {t.ui.learnMore}
                  <span className="visually-hidden">{p.learnMoreSr(s.name)}</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <section className="services__cta" aria-labelledby="services-cta-title">
        <h2 id="services-cta-title">{p.ctaTitle}</h2>
        <p>{p.ctaText}</p>
        <Link to={to("contact")} className="btn btn--primary">
          {t.ui.bookAn}
        </Link>
      </section>
    </div>
  );
}

export default Services;
