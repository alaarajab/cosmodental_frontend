import { Link } from "react-router-dom";
import "./Services.css";

import generalImg from "../../assets/general.webp";
import cosmeticImg from "../../assets/cosmetic.webp";
import implantImg from "../../assets/implant.webp";
import endoImg from "../../assets/endodontics.webp";
import { CLINIC } from "../../config/clinic";

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    image: generalImg,
    description:
      "Preventive and routine dental care for children and adults, focused on keeping your teeth and gums healthy for life.",
    cases: [
      "Check-ups, exams and professional cleanings",
      "Digital X-rays",
      "Cavity detection and tooth-colored fillings",
      "Gum disease treatment",
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    image: cosmeticImg,
    description:
      "Modern cosmetic treatments tailored to each patient to brighten, reshape and refresh your smile.",
    cases: ["Teeth whitening", "Porcelain veneers", "Smile makeover planning"],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    image: implantImg,
    description:
      "Permanent tooth replacement that restores the look, comfort and function of natural teeth.",
    cases: [
      "Single tooth implants",
      "Implant-supported bridges",
      "Full-mouth restoration",
    ],
  },
  {
    id: "root-canal-treatment",
    title: "Endodontics (Root Canal Treatment)",
    image: endoImg,
    description:
      "Root canal treatment to relieve tooth pain, treat infection and save your natural tooth.",
    cases: [
      "Root canal therapy",
      "Root canal retreatment",
      "Urgent tooth pain relief",
    ],
  },
];

function Services() {
  return (
    <div className="services">
      <h1 className="services__title">Our Dental Services</h1>
      <p className="services__intro">
        From routine cleanings to implants, {CLINIC.name} offers complete dental
        care for the whole family in Northlake, IL.
      </p>

      <ul className="services__list">
        {services.map((service) => (
          <li className="service" key={service.id} id={service.id}>
            <img
              src={service.image}
              alt=""
              className="service__image"
              width="320"
              height="240"
              loading="lazy"
            />
            <div className="service__content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <h3 className="service__subheading">Treatments include</h3>
              <ul>
                {service.cases.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <section className="services__cta" aria-labelledby="services-cta-title">
        <h2 id="services-cta-title">Not sure which treatment you need?</h2>
        <p>Book a check-up and your dentist will explain your options.</p>
        <Link to="/contact" className="btn btn--primary">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}

export default Services;
