import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaSmile,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTooth,
  FaHandHoldingHeart,
  FaComments,
  FaLanguage,
  FaGoogle,
  FaClock,
  FaCreditCard,
} from "react-icons/fa";
import "./Home.css";

import mapImage from "../../assets/large-screen.webp";
import { CLINIC, fullAddress, reviewsUrl } from "../../config/clinic";
import { DENTISTS } from "../../config/team";
import { GALLERY } from "../../config/gallery";
import { SERVICE_IMAGES } from "../../config/serviceImages";
import { SERVICE_IDS } from "../../i18n/pages";
import { useLang, languagesText } from "../../i18n";

const TRUST = [
  { icon: FaUserMd, href: "#team" },
  { icon: FaSmile, href: "#new-patients" },
  { icon: FaCreditCard, href: "#insurance" },
  { icon: FaMapMarkerAlt, href: "#location" },
];
const REASON_ICONS = [FaUserMd, FaHandHoldingHeart, FaTooth, FaComments];

function Home() {
  const { lang, t, to } = useLang();
  const h = t.home;
  const languages = languagesText(CLINIC.languages, t);

  return (
    <div className="home">
      {/* Trust bar */}
      <section className="home__trust" aria-label={h.trustLabel}>
        <ul className="home__trust-list">
          {TRUST.map(({ icon: Icon, href }, i) => (
            <li key={href}>
              <a href={href}>
                <Icon aria-hidden="true" />
                <span>{h.trust[i]}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Intro */}
      <section className="home__section home__intro" aria-labelledby="intro-title">
        <h2 id="intro-title" className="home__title">
          {h.introTitle}
        </h2>
        <p className="home__lead">{h.intro}</p>
        {CLINIC.languages.length > 0 && (
          <p className="home__languages">
            <FaLanguage aria-hidden="true" />
            <span>
              <strong>{h.speak}</strong> {languages}
            </span>
          </p>
        )}
      </section>

      {/* Services */}
      <section className="home__section" aria-labelledby="services-title">
        <h2 id="services-title" className="home__title">
          {h.servicesTitle}
        </h2>
        <ul className="home__cards">
          {SERVICE_IDS.map((id) => {
            const s = t.services[id];
            return (
              <li className="home__card" key={id}>
                <img
                  className="home__card-image"
                  src={SERVICE_IMAGES[id]}
                  alt=""
                  width="300"
                  height="220"
                  loading="lazy"
                />
                <div className="home__card-body">
                  <h3 className="home__card-title">
                    <Link to={to(`service:${id}`)} className="home__card-link">
                      {s.name}
                    </Link>
                  </h3>
                  <p>{s.card}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="home__center">
          <Link to={to("services")} className="btn btn--primary">
            {h.seeAll}
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="home__section home__section--alt" aria-labelledby="why-title">
        <h2 id="why-title" className="home__title">
          {h.whyTitle}
        </h2>
        <ul className="home__reasons">
          {h.reasons.map(([title, text], i) => {
            const Icon = REASON_ICONS[i];
            return (
              <li className="home__reason" key={title}>
                <Icon className="home__reason-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{typeof text === "function" ? text(DENTISTS.length) : text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Meet the dentists */}
      <section id="team" className="home__section" aria-labelledby="team-title">
        <h2 id="team-title" className="home__title">
          {h.teamTitle}
        </h2>
        <ul className="home__team">
          {DENTISTS.map((d) => (
            <li className="home__team-card" key={d.name}>
              <img src={d.image} alt={h.portrait(d.name)} width="220" height="220" loading="lazy" />
              <h3>{d.name}</h3>
            </li>
          ))}
        </ul>
        <div className="home__center">
          <Link to={to("staff")} className="btn btn--outline">
            {h.wholeTeam}
          </Link>
        </div>
      </section>

      {/* Office gallery (appears automatically once photos are added) */}
      {GALLERY.length > 0 && (
        <section className="home__section home__section--alt" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="home__title">
            {h.galleryTitle}
          </h2>
          <ul className="home__gallery">
            {GALLERY.map((photo) => (
              <li key={photo.src}>
                <img src={photo.src} alt={lang === "es" ? photo.altEs : photo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Reviews */}
      <section className="home__section home__reviews" aria-labelledby="reviews-title">
        <h2 id="reviews-title" className="home__title">
          {h.reviewsTitle}
        </h2>
        <p className="home__lead">{h.reviewsText}</p>
        <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
          <FaGoogle aria-hidden="true" />
          {h.reviewsBtn}
          <span className="visually-hidden">{t.ui.newTab}</span>
        </a>
      </section>

      {/* Insurance & payment */}
      <section
        id="insurance"
        className="home__section home__section--alt"
        aria-labelledby="insurance-title"
      >
        <h2 id="insurance-title" className="home__title">
          {h.insuranceTitle}
        </h2>
        <div className="home__two-col">
          <div>
            <h3>{h.insuranceH}</h3>
            {CLINIC.insurance.length > 0 ? (
              <>
                <p>{h.inNetwork}</p>
                <ul className="home__bullets">
                  {CLINIC.insurance.map((plan) => (
                    <li key={plan}>{plan}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{h.insuranceGeneric}</p>
            )}
          </div>
          <div>
            <h3>{h.pricingH}</h3>
            <p>{h.pricing}</p>
          </div>
        </div>
      </section>

      {/* New patients */}
      <section id="new-patients" className="home__section" aria-labelledby="new-title">
        <h2 id="new-title" className="home__title">
          {h.newTitle}
        </h2>
        <ol className="home__steps">
          {h.steps.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="home__bring">
          <h3>{h.bringTitle}</h3>
          <ul className="home__bullets">
            {h.bring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="home__section home__section--alt" aria-labelledby="faq-title">
        <h2 id="faq-title" className="home__title">
          {h.faqTitle}
        </h2>
        <div className="home__faq">
          {t.faqs.map(([q, a]) => (
            <details key={q} className="home__faq-item">
              <summary>
                <h3>{q}</h3>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Location & hours */}
      <section id="location" className="home__section" aria-labelledby="visit-title">
        <h2 id="visit-title" className="home__title">
          {h.visitTitle}
        </h2>
        <div className="home__visit">
          <div className="home__visit-info">
            <h3>{h.address}</h3>
            <p>
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                {CLINIC.address.street}
                <br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
                <span className="visually-hidden">{t.ui.mapsNewTab}</span>
              </a>
            </p>
            <h3>{h.phone}</h3>
            <p>
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
              <br />
              <small className="relay-note">{t.ui.relay}</small>
            </p>
            {CLINIC.languages.length > 0 && (
              <>
                <h3>{h.languages}</h3>
                <p>{languages.charAt(0).toUpperCase() + languages.slice(1)}</p>
              </>
            )}
            <h3>{h.hours}</h3>
            {CLINIC.hours.length ? (
              <dl className="home__hours">
                {CLINIC.hours.map((hr) => (
                  <div key={hr.days}>
                    <dt>{lang === "es" ? hr.daysEs || hr.days : hr.days}</dt>
                    <dd>{lang === "es" ? hr.timeEs || hr.time : hr.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p>
                <FaClock aria-hidden="true" /> {t.ui.hoursCall}
              </p>
            )}
            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <FaMapMarkerAlt aria-hidden="true" />
              {h.directions}
              <span className="visually-hidden">{t.ui.mapsNewTab}</span>
            </a>
          </div>
          <a className="home__visit-map" href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={mapImage} alt={t.footer.mapAlt(fullAddress)} loading="lazy" />
          </a>
        </div>
      </section>

      {/* Final call to action */}
      <section className="home__cta" aria-labelledby="cta-title">
        <h2 id="cta-title">{h.ctaTitle}</h2>
        <p>{h.ctaText}</p>
        <div className="home__cta-actions">
          <Link to={to("contact")} className="btn btn--light">
            {t.ui.book}
          </Link>
          <a href={CLINIC.phoneHref} className="btn btn--cta-outline">
            <FaPhoneAlt aria-hidden="true" />
            {t.ui.call} {CLINIC.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
