import { useNavigate, useParams } from "react-router-dom";
import courses from "../../data/courses";
import { IoMdTime } from "react-icons/io";
import "../../styles/home/course-details/course-details.css";

export default function CourseDetailsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <h2>Course not found</h2>;

  return (
    <section className="course-details">
      <div className="container">
        {/* Course Image Banner */}
        <div className="course-banner">
          <img src={course.image} alt={course.title} />
        </div>

        <h1>{course.title}</h1>

        <div className="course-meta">
          <span>{course.type}</span>
          <span>
            <IoMdTime /> {course.duration}
          </span>
        </div>

        <p className="course-description">{course.fullDescription}</p>

        <div className="course-section">
          <h3>Modules Covered</h3>
          <ul>
            {course.modules.map((module, i) => (
              <li key={i}>{module}</li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h3>Eligibility</h3>
          <p>{course.eligibility}</p>
        </div>

        <button className="apply-btn" onClick={() => navigate(`/apply-now`)}>
          Apply Now
        </button>
      </div>
    </section>
  );
}
