import {
  FaUniversity,
  FaTools,
  FaBriefcase,
} from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import "../../styles/home/why-choose-mindmine.css";

export default function WhyChooseMindmine() {
  return (
    <section className="why-mindmine-section">
      <div className="container">
        <div className="why-mindmine-container">
          {/* LEFT SIDE */}
          <div className="why-mindmine-left">
            <h2>
              Why Students Choose <br />
              <span>Mindmine?</span>
            </h2>

            <p>
              We offer high-value vocational programs that combine academic
              strength, industry practice and career development to build
              confident professionals.
            </p>

            <button className="why-mindmine-btn" onClick={() => (window.location.href = "/apply-now")}>Join Us Today</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="why-mindmine-right">
            <div className="why-card">
              <FaUniversity />
              <h4>UGC Approved Degrees</h4>
              <p>
                All B.Voc programs are awarded by Sikkim Professional University
                (UGC Approved).
              </p>
            </div>

            <div className="why-card">
              <FaTools />
              <h4>Skill-Based Education</h4>
              <p>
                Hands-on learning in Data Science, Animation, Web Tech & Nursing
                programs.
              </p>
            </div>

            <div className="why-card">
              <LiaCertificateSolid />
              <h4>Recognized Programs</h4>
              <p>
                Nursing under WBNC & INC, Vocational degrees under National
                Education Framework.
              </p>
            </div>

            <div className="why-card">
              <FaBriefcase />
              <h4>Placement Support</h4>
              <p>
                Dedicated placement assistance & internship opportunities for
                all students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
