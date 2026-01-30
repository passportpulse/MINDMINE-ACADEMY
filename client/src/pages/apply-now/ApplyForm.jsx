import React, { useState } from "react";
import "../../styles/apply-now/form.css";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    campus: "",
    campusLocation: "",
    course: "",
    fullName: "",
    dob: "",
    gender: "",
    caste: "",
    aadhaar: "",
    address: "",
    city: "",
    pin: "",
    phone: "",
    email: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ BASIC VALIDATION
    if (!formData.course || !formData.fullName || !formData.phone || !formData.email) {
      setError("Please fill all required fields");
      return;
    }

    if (formData.phone.length < 10) {
      setError("Enter valid phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
    } catch {
      setError("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="apply-form-container">
        <div className="apply-form-card success-box">
          <h2>🎉 Application Submitted!</h2>
          <p>Thank you for applying to MindMine Academy.</p>
          <p>A confirmation email has been sent 📩</p>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-form-container">
      <div className="apply-form-card">

        <div className="form-header">
          <h1>Student Enrollment Form</h1>
          <p className="form-info">
            Step 1: Personal & Family Information | Session: 2025-26
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <h2>Campus & Course Info</h2>
          <div className="grid-2">
            <input name="campus" placeholder="Campus" onChange={handleChange} />
            <input name="campusLocation" placeholder="Campus Location" onChange={handleChange} />
            <input
              className="full-width"
              name="course"
              placeholder="Course Applied For *"
              onChange={handleChange}
            />
          </div>

          <h2>Student Details</h2>
          <div className="grid-2">
            <input name="fullName" placeholder="Full Name *" onChange={handleChange} />
            <input type="date" name="dob" onChange={handleChange} />

            <select name="gender" onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select name="caste" onChange={handleChange}>
              <option value="">Caste</option>
              <option>GEN</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
            </select>

            <input name="aadhaar" placeholder="Aadhaar No" onChange={handleChange} />

            <input value="Indian" disabled />

            <textarea
              className="full-width"
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
            />

            <input name="city" placeholder="City" onChange={handleChange} />
            <input value="West Bengal" disabled />

            <input name="pin" placeholder="Pin Code" onChange={handleChange} />
            <input name="phone" placeholder="Contact No *" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} />
          </div>

          <h2>Father's Info</h2>
          <div className="grid-2">
            <input name="fatherName" placeholder="Father Name" onChange={handleChange} />
            <input name="fatherOccupation" placeholder="Occupation" onChange={handleChange} />
            <input name="fatherPhone" placeholder="Phone" onChange={handleChange} />
          </div>

          <h2>Mother's Info</h2>
          <div className="grid-2">
            <input name="motherName" placeholder="Mother Name" onChange={handleChange} />
            <input name="motherOccupation" placeholder="Occupation" onChange={handleChange} />
            <input name="motherPhone" placeholder="Phone" onChange={handleChange} />
          </div>

          <h2>Local Guardian</h2>
          <div className="grid-3">
            <input name="guardianName" placeholder="Name" onChange={handleChange} />
            <input name="guardianRelation" placeholder="Relation" onChange={handleChange} />
            <input name="guardianPhone" placeholder="Phone" onChange={handleChange} />
          </div>

          <button className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {error && <div className="error-box">{error}</div>}

        </form>
      </div>
    </div>
  );
}
