import hero from "../../assets/hero-students.png";
import "../../styles/main-menu/hero-section.css";

export default function HeroSection() {
  return (
    <section className="menu-hero">
      <div className="menu-hero-content">
        <h1>Explore Competitive Exams</h1>
        <p>
          Choose your path. Prepare smart. Build your future with structured
          guidance and expert learning.
        </p>
        <button className="primary-btn">Explore Exams <i className="fa-solid fa-arrow-right"></i> </button>
      </div>

      <div className="menu-hero-image">
        <img
          src={hero}
          alt="students"
        />
      </div>
    </section>
  );
}
