import "../../styles/student-zone/hero.css";

export default function Hero() {
  return (
    <section className="student-hero">
      <div className="student-hero-content">
        <h1>Welcome to the Student Zone</h1>
        <p>
          Access your enrollment, notices, payments, and enquiries all in one place.
        </p>
        <button className="hero-btn">Go to Dashboard</button>
      </div>
    </section>
  );
}
