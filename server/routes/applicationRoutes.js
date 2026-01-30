const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const nodemailer = require("nodemailer");

// generate application ID
const generateAppId = () => {
  return "MMA-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
};

// configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /api/application
router.post("/", async (req, res) => {
  try {
    const applicationId = generateAppId();

    const application = await Application.create({
      ...req.body,
      applicationId
    });

    // send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,  // student's email
      subject: "Mindmine Academy - Application Received",
      html: `
        <h2>Thank you for applying!</h2>
        <p>Dear ${req.body.fullName},</p>
        <p>Your application has been submitted successfully.</p>
        <p><strong>Application ID:</strong> ${applicationId}</p>
        <p>We will review your application and contact you soon.</p>
        <p>Regards,<br/>Mindmine Academy</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      applicationId,
      message: "Application submitted successfully. Check your email!"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application"
    });
  }
});

module.exports = router;
