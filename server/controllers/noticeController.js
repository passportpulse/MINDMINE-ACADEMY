const Notice = require("../models/Notice");

// Create notice
exports.createNotice = async (req, res) => {
  try {
    const { title } = req.body;
    const filePath = req.file?.path;
    if (!filePath) return res.status(400).json({ success: false, message: "File is required" });

    const notice = await Notice.create({ title, image: filePath });
    res.json({ success: true, notice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to upload notice" });
  }
};

// Get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
