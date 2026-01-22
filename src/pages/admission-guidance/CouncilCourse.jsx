import React from "react";

export default function CouncilCourse() {
  const councilPrograms = [
    {
      category: "Education",
      courses: ["B.Ed", "M.Ed", "D.El.Ed", "NTT", "B.P.Ed", "M.P.Ed"],
    },
    {
      category: "Healthcare & Nursing",
      courses: ["GNM", "BSc Nursing", "B.Pharm", "D.Pharm"],
    },
    {
      category: "Law",
      courses: ["LLB", "BA LLB", "BBA LLB"],
    },
    {
      category: "Computer & Management",
      courses: ["BCA", "MCA", "BBA", "MBA", "E-Commerce"],
    },
    {
      category: "International & Other",
      courses: ["Study Visa"],
    },
  ];

  return (
    <section className="council-section" id="council">
      <h2 className="section-heading">Council & Professional Programs</h2>
      <p className="section-subtext">
        Government-recognized council courses and professional pathways with
        strong career outcomes
      </p>

      <div className="council-grid">
        {councilPrograms.map((group, index) => (
          <div className="council-card" key={index}>
            <h3 className="council-title">{group.category}</h3>

            <div className="council-courses">
              {group.courses.map((course, i) => (
                <span className="council-pill" key={i}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
