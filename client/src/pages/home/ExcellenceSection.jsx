import React from "react";
import {
  FaUniversity,
  FaTools,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "../../styles/home/excellence-section.css";

export default function ExcellenceSection() {
  const features = [
    {
      icon: <FaUniversity />,
      title: "UGC Approved B.Voc Degrees",
      desc: "All Bachelor of Vocation degrees are awarded by Sikkim Professional University (Approved by UGC, Govt. of India).",
    },
    {
      icon: <FaTools />,
      title: "Skill-Focused Courses",
      desc: "Programs built to develop real-world practical skill sets for future-ready employment opportunities.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Modern Industry Curriculum",
      desc: "Courses include Data Science, AI, Multimedia, Animation, VFX, Software & Web Technology.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Learning Environment",
      desc: "Students learn directly from professionals and industry specialists in their domain.",
    },
  ];

  return (
    <section className="excellence-section">
      <div className="container">
        {/* HEADER */}
        <div className="excellence-header">
          <h4>Why Choose Us</h4>
          <h2>Excellence in Vocational Education</h2>
          <p>
            We offer advanced B.Voc programs in Data Science, Animation, Web
            Development & Nursing, designed to build professional skills with
            University recognized degrees.
          </p>
        </div>
      {/* GRID CARDS */}
        <div className="excellence-grid">
          {features.map((item, index) => (
            <div className="excellence-card" key={index}>
              <div className="excellence-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
