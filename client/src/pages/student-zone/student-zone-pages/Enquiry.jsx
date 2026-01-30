import React, { useState } from "react";
import "../../../styles/student-zone/enquiry.css";
import Hero from "../Hero";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ✅ FRONTEND VALIDATION
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error();

      setSuccess(data.message);
    } catch {
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero title="Enquiry" description="Submit your queries or questions here." />

      <section className="enquiry-section">
        <div className="enquiry-card">
          {success && (
            <div className="success-box">
              <h2>Thank You!</h2>
              <p>Your enquiry has been sent successfully.</p>
            </div>
          )}

          {error && (
            <div className="error-box">
              <p>{error}</p>
            </div>
          )}

          {!success && (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label>Full Name *</label>
              <input name="name" value={formData.name} onChange={handleChange} />

              <label>Email *</label>
              <input name="email" value={formData.email} onChange={handleChange} />

              <label>Subject *</label>
              <input name="subject" value={formData.subject} onChange={handleChange} />

              <label>Message *</label>
              <textarea name="message" rows={5} value={formData.message} onChange={handleChange} />

              <button className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
