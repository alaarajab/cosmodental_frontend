import "./Staff.css";
import staffImg from "../../assets/character.jpg";
import baselImg from "../../assets/basel-abozor.png";
import hussainImg from "../../assets/hussain-akam.png";
import haqiImg from "../../assets/mohammed-haqi.png";
import asimImg from "../../assets/asimImg.png";

function Staff() {
  const staffMembers = [
    {
      name: "Dr. Basel Abozor",
      title: "General Dentist",
      experience:
        "Specializes in endodontics with 15+ years of patient-focused care.",
      image: baselImg,
    },
    {
      name: "Dr. Hussain Akam",
      title: "General Dentist",
      experience:
        "Provides routine check-ups, preventive care, and cosmetic treatments.",
      image: hussainImg,
    },
    {
      name: "Dr. Mohammed Abdul Haq",
      title: "General Dentist",
      experience:
        "Provides routine check-ups, preventive care, and cosmetic treatments.",
      image: haqiImg,
    },
    {
      name: "Dr. Asim Abdul Quader",
      title: "General Dentist",
      experience:
        "Provides routine check-ups, preventive care, and cosmetic treatments.",
      image: asimImg,
    },
    {
      name: "Mr. Tom",
      title: "Dental Assistant",
      experience:
        "Supports dental procedures and patient care in all clinic operations.",
    },
    {
      name: "Ms. Ashley",
      title: "Dental Assistant",
      experience: "Assists procedures and ensures patient comfort.",
    },
  ];
  return (
    <section className="staff">
      <h2 className="staff__title">Meet Our Team</h2>

      <div className="staff__grid">
        {staffMembers.map((member, index) => (
          <div className="staff__grid-card" key={index}>
            <img
              src={member.image || staffImg}
              alt={member.name}
              className="staff__grid-image"
            />

            <div className="staff__grid-info">
              <h3 className="staff__grid-info-name">{member.name}</h3>
              <h4 className="staff__grid-info-title">{member.title}</h4>
              <p className="staff__grid-info-experience">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Staff;
