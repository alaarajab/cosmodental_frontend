import { Link } from "react-router-dom";
import "./Staff.css";
import placeholderImg from "../../assets/character.jpg";
import { DENTISTS, SUPPORT_STAFF } from "../../config/team";

function MemberCard({ member }) {
  return (
    <li className="staff__card">
      <img
        src={member.image || placeholderImg}
        alt={member.image ? `Portrait of ${member.name}` : ""}
        className="staff__image"
        width="300"
        height="272"
        loading="lazy"
      />
      <div className="staff__info">
        <h3 className="staff__name">{member.name}</h3>
        <p className="staff__role">{member.title}</p>
        <p className="staff__bio">{member.bio}</p>
      </div>
    </li>
  );
}

function Staff() {
  return (
    <section className="staff" aria-labelledby="staff-title">
      <h1 id="staff-title" className="staff__title">
        Meet Our Team
      </h1>
      <p className="staff__intro">
        Our dentists and assistants work together to give every patient
        thoughtful, comfortable and high-quality care.
      </p>

      <h2 className="staff__subtitle">Our Dentists</h2>
      <ul className="staff__grid">
        {DENTISTS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </ul>

      <div className="staff__cta">
        <Link to="/contact" className="btn btn--primary">
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}

export default Staff;
