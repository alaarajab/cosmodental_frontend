import "./Services.css";

import generalImg from "../../assets/general.png";
import cosmeticImg from "../../assets/cosmetic.png";
import implantImg from "../../assets/implant.png";
import endoImg from "../../assets/endodontics.png";

function Services() {
  const services = [
    {
      title: "General Dentistry",
      image: generalImg,
      description:
        "Preventive and routine dental care focused on maintaining long-term oral health.",
      cases: [
        "Routine cleanings and exams",
        "Cavity detection and fillings",
        "Gum disease treatment",
      ],
    },
    {
      title: "Cosmetic Dentistry",
      image: cosmeticImg,
      description:
        "Enhancing smiles with modern cosmetic solutions tailored to each patient.",
      cases: [
        "Teeth whitening",
        "Porcelain veneers",
        "Smile makeover planning",
      ],
    },
    {
      title: "Dental Implants",
      image: implantImg,
      description:
        "Permanent tooth replacement solutions that restore function and confidence.",
      cases: [
        "Single tooth implants",
        "Implant-supported bridges",
        "Full-mouth restoration",
      ],
    },
    {
      title: "Endodontics",
      image: endoImg,
      description:
        "Specialized root canal treatments to relieve pain and save natural teeth.",
      cases: [
        "Root canal therapy",
        "Retreatment cases",
        "Emergency pain relief",
      ],
    },
  ];

  return (
    <section className="services">
      {services.map((service) => (
        <div className="service" key={service.title}>
          <img src={service.image} alt={service.title} />
          <div className="service__content-wrapper">
            <div className="service__content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.cases.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <span className="service__divider" />
        </div>
      ))}
    </section>
  );
}

export default Services;
