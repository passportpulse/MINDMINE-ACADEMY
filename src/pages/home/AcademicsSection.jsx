import "../../styles/home/academics-section.css";
import courses from "../../data/courses"; 
import { IoIosArrowForward } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Course data


export default function AcademicsSection() {
    const navigate = useNavigate();

  return (
    <section className="academics-section">
      <div className="container">
        <div className="academics-header">
          <div className="academics-title">
            <span className="academics-small">Academics</span>
            <h2>Our Core Courses</h2>
          </div>

          <button className="view-all-btn">
            View All Courses <IoIosArrowForward />
          </button>
        </div>

        {/* B.Voc SECTION */}
        <div className="academics-subsection">
          <div className="academics-subheader">
            <span className="icon-box computer">
              <MdComputer />
            </span>
            <h3>B.Voc Degree Programs</h3>
          </div>

          <div className="academics-cards">
            {courses
              .filter((course) => course.category === "bvoc")
              .map((course, index) => (
                <div className="course-card" key={index}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-img"
                  />

                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <span className="course-type">{course.type}</span>
                    <p>{course.shortDescription}</p>

                    <div className="course-footer">
                      <span className="course-duration">
                        <IoMdTime /> {course.duration}
                      </span>
                      <button className="details-btn"  onClick={() => navigate(`/course/${course.slug}`)}>Details</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* NURSING SECTION */}
        <div className="academics-subsection">
          <div className="academics-subheader">
            <span className="icon-box heartbeat">
              <FaHeartbeat />
            </span>
            <h3>Nursing & Healthcare</h3>
          </div>

          <div className="academics-cards">
            {courses
              .filter((course) => course.category === "nursing")
              .map((course, index) => (
                <div className="course-card" key={index}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-img"
                  />

                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <span className="course-type">{course.type}</span>
                    <p>{course.description}</p>

                    <div className="course-footer">
                      <span className="course-duration">
                        <IoMdTime /> {course.duration}
                      </span>
                      <button className="details-btn"  onClick={() => navigate(`/course/${course.slug}`)}>Details</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
