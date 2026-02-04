import React, { useState } from "react";
import "../styles/form.css";

const API = "https://mindmine-backend.onrender.com";

export default function ApplyForm() {
  const statesAndUTs = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
    "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
    "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
    "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands",
    "Chandigarh","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

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
    state: "",
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
    lastQualification: "",
    passingYear: "",
    previousCourse: "",
    previousInstitute: "",
    percentage: "",
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- VALIDATION ----------------

  const validateStep1 = () => {
    if (!/^\d{12}$/.test(formData.aadhaar))
      return "Aadhaar must be exactly 12 digits";

    if (!/^\d{10}$/.test(formData.phone))
      return "Student phone must be 10 digits";

    if (formData.fatherPhone && !/^\d{10}$/.test(formData.fatherPhone))
      return "Father phone must be 10 digits";

    if (formData.motherPhone && !/^\d{10}$/.test(formData.motherPhone))
      return "Mother phone must be 10 digits";

    if (formData.guardianPhone && !/^\d{10}$/.test(formData.guardianPhone))
      return "Guardian phone must be 10 digits";

    return "";
  };

  const handleNext = () => {
    const required = ["course", "fullName", "phone", "email"];

    for (let f of required) {
      if (!formData[f]) {
        setError("Please fill all required fields (*)");
        return;
      }
    }

    const err = validateStep1();
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setStep(2);
  };

  const handleBack = () => setStep(1);

  // ---------------- SUBMIT ----------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const year = Number(formData.passingYear);
    const currentYear = new Date().getFullYear();

    if (!year || year > currentYear) {
      setError("Passing year must be valid and not in the future");
      return;
    }

    const percent = Number(formData.percentage);
    if (percent < 0 || percent > 100) {
      setError("Percentage must be between 0 and 100");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/api/application`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setTrackingId(data.trackingId);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- SUCCESS ----------------

  if (submitted) {
    return (
      <div className="apply-form-container">
        <div className="apply-form-card success-box">
          <h2>🎉 Application Submitted Successfully</h2>
          <p>Your Tracking ID:</p>
          <strong>{trackingId}</strong>
        </div>
      </div>
    );
  }

  // ---------------- FORM ----------------

  const input = (name, placeholder, props = {}) => (
    <input
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );

  return (
    <div className="apply-form-container">
      <div className="apply-form-card">
        <h1>Student Enrollment Form</h1>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h2>Student Info</h2>
              <div className="grid-2">
                {input("fullName", "Full Name *")}
                {input("course", "Course *")}
                {input("aadhaar", "Aadhaar", { maxLength: 12, inputMode: "numeric" })}
                {input("phone", "Phone *", { maxLength: 10, inputMode: "numeric" })}
                {input("email", "Email *", { type: "email" })}
              </div>

              <h2>Parents</h2>
              <div className="grid-2">
                {input("fatherPhone", "Father Phone", { maxLength: 10 })}
                {input("motherPhone", "Mother Phone", { maxLength: 10 })}
                {input("guardianPhone", "Guardian Phone", { maxLength: 10 })}
              </div>

              <button type="button" onClick={handleNext}>
                Next →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Academic Info</h2>
              <div className="grid-2">
                {input("lastQualification", "Last Qualification *")}
                {input("passingYear", "Passing Year *", { type: "number" })}
                {input("percentage", "Percentage", { type: "number" })}
              </div>

              <div className="form-buttons">
                <button type="button" onClick={handleBack}>
                  ← Back
                </button>
                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}

          {error && <div className="error-box">{error}</div>}
        </form>
      </div>
    </div>
  );
}
