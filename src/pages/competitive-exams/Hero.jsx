import React from "react";
import { FaClock, FaRupeeSign } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="text-center">
          <div className="hero-button-container">
            <button className="hero-button">Premium Education Provider</button>
          </div>

          <h1 className="hero-heading">Mindmine Academy for</h1>
          <h1 className="hero-gradient-text">Competitive Exams</h1>

          <div className="hero-text">
            <p>
              52A Indian Mirror Street, Opposite GD Hospital, Taltala, Kolkata
            </p>
            <p>
              Empowering students to crack the toughest government exams with
              expert strategy.
            </p>
          </div>

          <div className="hero-actions">
            <button className="primary-btn">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>

            <a href="tel:+917605057139" className="phone-btn">
              <i className="fa-solid fa-phone-volume"></i>
              <span>7605057139</span>
            </a>
          </div>
        </div>
      </div>

      {/* OVERLAPPING CARDS */}

      <div className="hero-cards">
        {/* CARD 1: Course Duration */}
        <div className="hero-card">
          <div className="card-title">
            <FaClock className="card-icon clock" />

            <div className="card-text">
              <h3>Course Duration</h3>
              <p>Structured Learning Levels</p>
            </div>
          </div>

          <div className="course-duration">
            <div className="duration-row">
              <span>Level 1</span>
              <span className="fees-duration-right">6 Months</span>
            </div>
            <div className="duration-row">
              <span>Level 2</span>
              <span className="fees-duration-right">1 Year</span>
            </div>
            <div className="duration-row">
              <span>Level 3</span>
              <span className="fees-duration-right">2 Years</span>
            </div>
          </div>
        </div>

        {/* CARD 2: Affordable Fees */}
        <div className="hero-card">
          <div className="card-title">
            <FaRupeeSign className="card-icon rupee" />

            <div className="card-text">
              <h3>Affordable Fees</h3>
              <p>Invest in Your Future</p>
            </div>
          </div>

          <div className="course-fees">
            <div className="fees-row highlight">
              <div className="fees-text">
                <span>Level 1 & 2</span>
                <span>
                  ₹1200 <span className="per-month">/ month</span>
                </span>
              </div>
            </div>

            <div className="fees-row">
              <span>Level 3</span>
              <span className="fees-row-right">₹1500 / month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
