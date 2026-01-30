import React, { useState } from "react";
import "../../../styles/apply-now/form.css";

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
    state: "West Bengal",
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
    guardianPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ FRONTEND VALIDATION
    if (!formData.course || !formData.fullName || !formData.email || !formData.phone) {
      setError("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (formData.phone.length < 10) {
      setError("Enter a valid phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error();

      setAppId(data.applicationId);
      setSubmitted(true);
    } catch {
      setError("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-form-container">
      <div className="apply-form-card">

        {submitted ? (
          /* ✅ SUCCESS SCREEN */
          <div className="success-box">
            <h2>🎉 Application Submitted Successfully!</h2>
            <p>Thank you for applying to Mindmine Academy.</p>
            <p><strong>Your Application ID:</strong> {appId}</p>
            <p>A confirmation email has been sent 📩</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <h2>Campus & Course Info</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Campus</label>
                <input name="campus" value={formData.campus} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Campus Location</label>
                <input name="campusLocation" value={formData.campusLocation} onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Course Applied For *</label>
                <input name="course" value={formData.course} onChange={handleChange} />
              </div>
            </div>

            <h2>Student Details</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Caste</label>
                <select name="caste" value={formData.caste} onChange={handleChange}>
                  <option value="">Select</option>
                  <option>GEN</option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                </select>
              </div>

              <div className="form-group">
                <label>Aadhaar No</label>
                <input name="aadhaar" value={formData.aadhaar} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Nationality</label>
                <input value="Indian" disabled />
              </div>

              <div className="form-group full-width">
                <label>Full Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>City / District</label>
                <input name="city" value={formData.city} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>State</label>
                <input value="West Bengal" disabled />
              </div>

              <div className="form-group">
                <label>Pin Code</label>
                <input name="pin" value={formData.pin} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>WhatsApp / Contact No *</label>
                <input name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Email Address *</label>
                <input name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {error && <div className="error-box"><p>{error}</p></div>}

          </form>
        )}

      </div>
    </div>
  );
}
