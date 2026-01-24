import React from "react";
import "../../styles/main-menu/exam-grid.css";

const exams = [
  {
    name: "VOCLET",
    subjects: "Physics, Chemistry, Mathematics, Mechanics Computer",
    eligibility: "Class 10th appeared",
  },
  {
    name: "JELET",
    subjects:
      "Engineering Mathematics, Electrical Technology, Computer Application, Engineering Mechanics",
    eligibility: "Class 10th appeared + Polytechnic",
  },
  {
    name: "JEXPO",
    subjects: "Physics, Chemistry, Mathematics, English",
    eligibility: "Class 10th appeared",
  },
  {
    name: "NET",
    subjects: "Post Graduation Subjects",
    eligibility: "Master’s Degree",
  },
  {
    name: "SET",
    subjects: "Multiple Subjects",
    eligibility: "Master’s Degree",
  },
];

export default function ExamGridSection() {
  return (
    <section className="exam-grid-section">
      <div className="container">
        <h2>Other Major Exams</h2>

        <div className="exam-grid">
          {exams.map((exam, index) => (
            <div className="exam-card" key={index}>
              <h3>{exam.name}</h3>
              <p>
                <strong>Subjects:</strong> {exam.subjects}
              </p>
              <p>
                <strong>Eligibility:</strong> {exam.eligibility}
              </p>
              <button className="outline-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
