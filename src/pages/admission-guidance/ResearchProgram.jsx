import React from "react";

export default function ResearchProgram() {
  const phdSubjects = [
    "English",
    "Bengali",
    "Hindi",
    "Political Science",
    "History",
    "Education",
    "Philosophy",
    "Sociology",
    "Psychology",
    "Economics",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Zoology",
    "Botany",
    "Microbiology",
    "Biotechnology",
    "Environmental Science",
    "Commerce",
    "Management",
    "Computer Science",
    "Information Technology",
    "Library & Information Science",
    "Social Work",
    "Law",
    "Engineering (All Branches)",
  ];

  return (
    <section className="research-section" id="research">
      <div className="research-wrapper">
        <div className="research-header">
          <span className="research-tag">Doctoral Program</span>
          <h2>PhD – All Subjects</h2>
          <p>
            Pursue advanced research under expert supervision with recognized
            doctoral programs across multiple disciplines.
          </p>
        </div>

        <div className="research-subjects">
          {phdSubjects.map((subject, index) => (
            <div className="research-subject" key={index}>
              {subject}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
