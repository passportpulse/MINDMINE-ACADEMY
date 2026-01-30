const Enquiry = require("../models/Enquiry");

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

// Create enquiry (if needed, for public form)
exports.createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json({ success: true, enquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to submit enquiry" });
  }
};
