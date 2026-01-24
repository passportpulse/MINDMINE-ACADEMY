import "../../styles/about/why-stand-apart-section.css";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaIndustry,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  { icon: <FaUniversity />, title: "B.Voc", subtitle: "UGC Approved" },
  {
    icon: <FaCheckCircle />,
    title: "100% Placement Assistance",
    subtitle: "Career-Ready Students",
  },
  {
    icon: <FaIndustry />,
    title: "Industry Ready",
    subtitle: "Hands-On Training",
  },
  {
    icon: <FaTools />,
    title: "Skill Focused",
    subtitle: "Practical & Relevant Skills",
  },
];

export default function WhyStandApart() {
  return (
    <section className="stand-apart">
      <div className="container">
        <div className="stand-header">
          <h2>Why We Stand Apart</h2>
          <p>
            Empowering students with practical skills, industry exposure, and
            career-focused education.
          </p>
        </div>

        <div className="stand-grid">
          {features.map((f, index) => (
            <div className="stand-card" key={index}>
              <div className="stand-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
