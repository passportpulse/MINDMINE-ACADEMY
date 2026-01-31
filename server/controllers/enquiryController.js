const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create enquiry and send email
exports.createEnquiry = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // 1️⃣ Save to database
    const enquiry = await Enquiry.create({ name, email, subject, message });

    // 2️⃣ Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.verify(); // checks connection

    const adminMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Enquiry: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    };

    const studentMailOptions = {
      from: `"Mindmine Academy" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Mindmine Academy – Enquiry Received",
      html: `
    <p>Hello ${name},</p>
    <p>Thank you for contacting <strong>Mindmine Academy</strong>.</p>
    <p>We have received your enquiry regarding "<strong>${subject}</strong>".</p>
    <p>Our team will review your message and get back to you as soon as possible.</p>
    <br/>
    <p>Best regards,<br/>Mindmine Academy Team</p>
  `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions),
    ]);

    res
      .status(201)
      .json({ success: true, message: "Enquiry submitted and email sent!" });
  } catch (err) {
    console.error("Enquiry creation/email error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit enquiry" });
  }
};
