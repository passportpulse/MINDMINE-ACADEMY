import React from "react";
import { FaUserGraduate } from "react-icons/fa";

export default function FreeConsultation() {
  return (
    <section className="secure-career-section">
      <div className="secure-card">
        <div className="secure-text">
          <div className="scholar-image">
            <FaUserGraduate />
          </div>
          <h2>Not Sure Which Course Is Right for You?</h2>
          <p>
            Our career counselors are here to help you choose the best path for
            your future.
          </p>

          <button
            className="free-consult-btn"
            onClick={() => (window.location.href = "/apply-now")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
