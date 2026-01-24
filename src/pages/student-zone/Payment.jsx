import React from "react";
import "../../styles/student-zone/payment.css";

export default function Payment() {
  return (
    <section className="payment-section">
      <div className="payment-card">
        <h2>Payment</h2>
        <p>Make your tuition and course payments securely online.</p>
        <button className="payment-btn">Pay Now</button>
      </div>
    </section>
  );
}
