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

import generalImg from "../../assets/general.webp";
import cosmeticImg from "../../assets/cosmetic.webp";
import implantImg from "../../assets/implant.webp";
import endoImg from "../../assets/endodontics.webp";
import mapImage from "../../assets/large-screen.webp";
import { CLINIC, fullAddress, reviewsUrl } from "../../config/clinic";
import { DENTISTS } from "../../config/team";
import { GALLERY } from "../../config/gallery";

const services = [
  {
    title: "General Dentistry",
    image: generalImg,
    text: "Check-ups, cleanings, fillings and gum care to keep your whole family's smiles healthy.",
  },
  {
    title: "Cosmetic Dentistry",
    image: cosmeticImg,
    text: "Teeth whitening, veneers and smile makeovers planned around your goals.",
  },
  {
    title: "Dental Implants",
    image: implantImg,
    text: "Long-lasting replacement for missing teeth that looks, feels and works like your own.",
  },
  {
    title: "Root Canal Treatment",
    image: endoImg,
    text: "Endodontic care to relieve tooth pain and save your natural tooth.",
  },
];

const reasons = [
  {
    icon: FaUserMd,
    title: "Experienced dentists",
    text: `A team of ${DENTISTS.length} dentists with more than 20 years of combined experience, committed to providing exceptional, patient-focused care.`,
  },
  {
    icon: FaHandHoldingHeart,
    title: "Comfort comes first",
    text: "We take time to listen, go at your pace and make every visit as relaxed as possible.",
  },
  {
    icon: FaTooth,
    title: "Complete care in one place",
    text: "From routine cleanings to implants and root canals, most treatments are done right here.",
  },
  {
    icon: FaComments,
    title: "Clear, honest answers",
    text: "We explain your options and costs before any treatment starts — no surprises.",
  },
];

const faqs = [
  {
    q: "Are you accepting new patients?",
    a: "Yes. Request an appointment online or call us and we'll find a time that works for you.",
  },
  {
    q: "Do you accept my dental insurance?",
    a: "We work with many dental insurance plans. Call us with your plan details before your visit and our team will help you check your coverage.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Please bring a photo ID, your dental insurance card (if you have one), a list of any medications you take, and recent dental X-rays if you have them.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: `Call our office at ${CLINIC.phone} as soon as possible and we'll do our best to see you quickly. For serious injuries, heavy bleeding or swelling that affects breathing, call 911 or go to the nearest emergency room.`,
  },
  {
    q: "How often should I have a check-up and cleaning?",
    a: "Many people benefit from a check-up and cleaning about every six months. Your dentist will recommend the schedule that is right for you.",
  },
  {
    q: "Can a missing tooth be replaced?",
    a: "Often, yes. Options include dental implants, bridges and dentures. At a consultation, your dentist will check your oral health and explain which option suits you best.",
  },
  {
    q: "Is a root canal painful?",
    a: "Root canal treatment is done with local anesthesia, so most patients feel pressure rather than pain during the procedure. It is usually done to relieve the pain caused by an infected tooth.",
  },
  {
    q: "Can I send my medical information through the website?",
    a: "Please don't. To protect your privacy, share health or insurance details with us by phone or in person — not through the contact form or email.",
  },
];

// "English, Spanish and Arabic"
const languageList = (langs) =>
  langs.length > 1
    ? `${langs.slice(0, -1).join(", ")} and ${langs[langs.length - 1]}`
    : langs[0];

function Home() {
  return (
    <div className="home">
      {/* 2 — Trust bar */}
      <section className="home__trust" aria-label="Why patients choose us">
        <ul className="home__trust-list">
          <li>
            <a href="#team">
              <FaUserMd aria-hidden="true" />
              <span>{DENTISTS.length} experienced dentists</span>
            </a>
          </li>

          <li>
            <a href="#new-patients">
              <FaSmile aria-hidden="true" />
              <span>New patients welcome</span>
            </a>
          </li>

          <li>
            <a href="#insurance">
              <FaCreditCard aria-hidden="true" />
              <span>Insurance &amp; easy payment</span>
            </a>
          </li>

          <li>
            <a href="#location">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Convenient Northlake location</span>
            </a>
          </li>
        </ul>
      </section>

      {/* Intro */}
      <section
        className="home__section home__intro"
        aria-labelledby="intro-title"
      >
        <h2 id="intro-title" className="home__title">
          Your Neighborhood Dentist in Northlake
        </h2>
        <p className="home__lead">
          {CLINIC.name} provides compassionate, high-quality dental care to
          Northlake, Melrose Park, Elmhurst, Chicago and the surrounding
          communities. Our team offers general, cosmetic, implant and root canal
          dentistry, combining modern technology with a patient-centered
          approach to keep your smile healthy and confident.
        </p>
        {CLINIC.languages.length > 0 && (
          <p className="home__languages">
            <FaLanguage aria-hidden="true" />
            <span>
              <strong>We speak your language:</strong>{" "}
              {languageList(CLINIC.languages)}
            </span>
          </p>
        )}
      </section>

      {/* 3 — Services */}
      <section className="home__section" aria-labelledby="services-title">
        <h2 id="services-title" className="home__title">
          Our Dental Services
        </h2>
        <ul className="home__cards">
          {services.map((service) => (
            <li className="home__card" key={service.title}>
              <img
                className="home__card-image"
                src={service.image}
                alt=""
                width="300"
                height="220"
                loading="lazy"
              />
              <div className="home__card-body">
                <h3 className="home__card-title">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="home__center">
          <Link to="/services" className="btn btn--primary">
            See All Services
          </Link>
        </div>
      </section>

      {/* 4 — Why choose us */}
      <section
        className="home__section home__section--alt"
        aria-labelledby="why-title"
      >
        <h2 id="why-title" className="home__title">
          Why Patients Choose Us
        </h2>
        <ul className="home__reasons">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li className="home__reason" key={title}>
              <Icon className="home__reason-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 5 — Meet the dentists */}
      <section id="team" className="home__section" aria-labelledby="team-title">
        <h2 id="team-title" className="home__title">
          Meet Our Dentists
        </h2>
        <ul className="home__team">
          {DENTISTS.map((d) => (
            <li className="home__team-card" key={d.name}>
              <img
                src={d.image}
                alt={`Portrait of ${d.name}`}
                width="220"
                height="220"
                loading="lazy"
              />
              <h3>{d.name}</h3>
            </li>
          ))}
        </ul>
        <div className="home__center">
          <Link to="/staff" className="btn btn--outline">
            Meet the Whole Team
          </Link>
        </div>
      </section>

      {/* 6 — Smile gallery (appears automatically once photos are added) */}
      {GALLERY.length > 0 && (
        <section
          className="home__section home__section--alt"
          aria-labelledby="gallery-title"
        >
          <h2 id="gallery-title" className="home__title">
            Our Office &amp; Smiles
          </h2>
          <ul className="home__gallery">
            {GALLERY.map((photo) => (
              <li key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 7 — Reviews */}
      <section
        className="home__section home__reviews"
        aria-labelledby="reviews-title"
      >
        <h2 id="reviews-title" className="home__title">
          What Our Patients Say
        </h2>
        <p className="home__lead">
          Read honest reviews from our patients on Google — and if we’ve cared
          for you, we’d be grateful if you shared your experience.
        </p>
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
        >
          <FaGoogle aria-hidden="true" />
          Read Our Google Reviews
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </section>

      {/* 8 — Insurance & payment */}
      <section
        id="insurance"
        className="home__section home__section--alt"
        aria-labelledby="insurance-title"
      >
        <h2 id="insurance-title" className="home__title">
          Insurance &amp; Payment
        </h2>
        <div className="home__two-col">
          <div>
            <h3>Dental insurance</h3>
            {CLINIC.insurance.length > 0 ? (
              <>
                <p>We are in-network with plans including:</p>
                <ul className="home__bullets">
                  {CLINIC.insurance.map((plan) => (
                    <li key={plan}>{plan}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>
                We work with many dental insurance plans. Call us with your plan
                details and we’ll help you check your coverage before your
                visit.
              </p>
            )}
          </div>
          <div>
            <h3>Clear pricing</h3>
            <p>
              Before treatment begins, we’ll explain your options and the
              expected cost so you can decide with confidence. Ask our front
              desk about the payment options we offer.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — New patients */}
      <section
        id="new-patients"
        className="home__section"
        aria-labelledby="new-title"
      >
        <h2 id="new-title" className="home__title">
          New Patients: What to Expect
        </h2>
        <ol className="home__steps">
          <li>
            <h3>Request a visit</h3>
            <p>
              Use our online form or call {CLINIC.phone}. We’ll confirm a time
              that suits you.
            </p>
          </li>
          <li>
            <h3>Your first appointment</h3>
            <p>
              We’ll review your health history, examine your teeth and gums, and
              take X-rays if needed.
            </p>
          </li>
          <li>
            <h3>Your care plan</h3>
            <p>
              Your dentist explains what they found, your options and costs, and
              answers every question.
            </p>
          </li>
        </ol>
        <div className="home__bring">
          <h3>Please bring</h3>
          <ul className="home__bullets">
            <li>A photo ID</li>
            <li>Your dental insurance card (if you have one)</li>
            <li>A list of medications you take</li>
            <li>Recent dental X-rays, if available</li>
          </ul>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section
        className="home__section home__section--alt"
        aria-labelledby="faq-title"
      >
        <h2 id="faq-title" className="home__title">
          Frequently Asked Questions
        </h2>
        <div className="home__faq">
          {faqs.map(({ q, a }) => (
            <details key={q} className="home__faq-item">
              <summary>
                <h3>{q}</h3>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 11 — Location & hours */}
      <section
        id="location"
        className="home__section"
        aria-labelledby="visit-title"
      >
        <h2 id="visit-title" className="home__title">
          Visit Our Office
        </h2>
        <div className="home__visit">
          <div className="home__visit-info">
            <h3>Address</h3>
            <p>
              {CLINIC.address.street}
              <br />
              {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
            </p>
            <h3>Phone</h3>
            <p>
              <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
            </p>
            {CLINIC.languages.length > 0 && (
              <>
                <h3>Languages spoken</h3>
                <p>{languageList(CLINIC.languages)}</p>
              </>
            )}
            <h3>Hours</h3>
            {CLINIC.hours.length ? (
              <dl className="home__hours">
                {CLINIC.hours.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p>
                <FaClock aria-hidden="true" /> Please call us for our current
                office hours.
              </p>
            )}
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <FaMapMarkerAlt aria-hidden="true" />
              Get Directions
              <span className="visually-hidden">
                {" "}
                (opens Google Maps in a new tab)
              </span>
            </a>
          </div>
          <a
            className="home__visit-map"
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapImage}
              alt={`Map showing ${CLINIC.name} at ${fullAddress}. Opens Google Maps in a new tab.`}
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* 12 — Final call to action */}
      <section className="home__cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Ready for a healthier, brighter smile?</h2>
        <p>Book your visit today — new patients are always welcome.</p>
        <div className="home__cta-actions">
          <Link to="/contact" className="btn btn--light">
            Book Appointment
          </Link>
          <a href={CLINIC.phoneHref} className="btn btn--cta-outline">
            <FaPhoneAlt aria-hidden="true" />
            Call {CLINIC.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
