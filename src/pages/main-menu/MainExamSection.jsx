import React from "react";
import "../../styles/main-menu/main-exam.css";
import physics from "../../assets/physics.jpg";
import biology from "../../assets/biology.jpg";
import chemistry from "../../assets/chemistry.jpg";
import math from "../../assets/math.jpg";

const subjectImages = {
  Physics: physics,
  Chemistry: chemistry,
  Mathematics: math,
  Biology: biology,
};

export default function MainExamSection({
  title,
  subjects,
  eligibility,
  ctaText = "Start Preparation",
}) {
  return (
    <section className="main-exam-section">
      <div className="container">
        <h2 className="main-exam-title">{title}</h2>

        <div className="main-exam-card">
          <div className="main-exam-subjects">
            {subjects.map((subject, index) => (
              <div key={index} className="exam-subject-card">
                <img
                  src={subjectImages[subject]}
                  alt={subject}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{subject}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="main-exam-info">
            <p>
              <strong>Eligibility:</strong> {eligibility}
            </p>
            <button className="secondary-btn">{ctaText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
