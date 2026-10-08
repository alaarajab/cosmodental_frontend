import { Link } from "react-router-dom";
import "./Staff.css";
import placeholderImg from "../../assets/character.jpg";
import { DENTISTS } from "../../config/team";
import { useLang } from "../../i18n";

function MemberCard({ member }) {
  const { lang, t, to } = useLang();
  return (
    <li className="staff__card">
      <img
        src={member.image || placeholderImg}
        alt={member.image ? t.home.portrait(member.name) : ""}
        className="staff__image"
        width="300"
        height="272"
        loading="lazy"
      />
      <div className="staff__info">
        <h3 className="staff__name">
          <Link to={to(`dentist:${member.slug}`)} className="staff__name-link">
            {member.name}
          </Link>
        </h3>
        {member.title && (
          <p className="staff__role">
            {lang === "es" ? member.titleEs || member.title : member.title}
          </p>
        )}
        <p className="staff__bio">{lang === "es" ? member.bioEs || member.bio : member.bio}</p>
      </div>
    </li>
  );
}

function Staff() {
  const { t, to } = useLang();
  const p = t.staffPage;
  return (
    <section className="staff" aria-labelledby="staff-title">
      <h1 id="staff-title" className="staff__title">
        {p.h1}
      </h1>
      <p className="staff__intro">{p.intro}</p>

      <h2 className="staff__subtitle">{p.dentists}</h2>
      <ul className="staff__grid">
        {DENTISTS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </ul>

      <div className="staff__cta">
        <Link to={to("contact")} className="btn btn--primary">
          {t.ui.bookAn}
        </Link>
      </div>
    </section>
  );
}

export default Staff;
