const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

// Mail transporter (same as application route)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// POST /api/enquiry
router.post("/", async (req, res) => {
  try {
    // Save enquiry in DB
    await Enquiry.create(req.body);

    // Send confirmation email
    await transporter.sendMail({
      from: `"Mindmine Academy" <${process.env.EMAIL_USER}>`,
      to: req.body.email,
      subject: "Mindmine Academy – Enquiry Received",
      html: `
        <h3>Hello ${req.body.name},</h3>
        <p>Thank you for contacting Mindmine Academy.</p>
        <p>We have received your enquiry and will reply shortly.</p>
        <hr/>
        <strong>Subject:</strong> ${req.body.subject}<br/>
        <strong>Message:</strong> ${req.body.message}
        <br/><br/>
        Regards,<br/>
        Mindmine Academy Team
      `,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {
    console.error("Enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });
  }
});

module.exports = router;
