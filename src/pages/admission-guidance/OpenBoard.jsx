import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function OpenBoard() {
  const subjects10 = [
    "English",
    "Hindi",
    "Mathematics",
    "Science And Technology",
    "Physics",
    "Chemistry",
    "Biology",
    "Social Science",
    "History",
    "Geography",
    "Computer Science",
    "Accountancy",
    "Business Studies",
    "Business Organization",
    "Environmental Science",
    "Home Science",
  ];

  const subjects12 = [
    "English",
    "Hindi",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Computer Science",
    "Political Science",
    "Accountancy",
    "Business Studies",
    "Psychology",
    "Philosophy",
    "Sociology",
    "Statistics",
    "Economics",
  ];

  return (
    <section className="open-board-section" id="open-board">
      <h2 className="section-heading">Open Board Programs</h2>
      <p className="section-subtext">
        Flexible & recognized education pathways for Class X and Class XII
      </p>

      <div className="open-board-grid">
        {/* CLASS 10 */}
        <div className="open-board-card">
          <h3>Class X – Open Board</h3>

          <div className="board-tags">
            <span>ICSE</span>
            <span>CBSE</span>
            <span>WBBSE</span>
          </div>

          <div className="subjects-grid">
            {subjects10.map((sub, index) => (
              <div className="subject-item" key={index}>
                <FaCheckCircle className="tick-icon" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CLASS 12 */}
        <div className="open-board-card dark">
          <h3>Class XII – Open Board</h3>

          <div className="board-tags">
            <span>ICSE</span>
            <span>CBSE</span>
            <span>WBCHSE</span>
          </div>

          <div className="subjects-grid">
            {subjects12.map((sub, index) => (
              <div className="subject-item" key={index}>
                <FaCheckCircle className="tick-icon" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
