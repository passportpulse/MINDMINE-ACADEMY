const Application = require("../models/Application");

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/application
exports.createApplication = async (req, res) => {
  try {
    const newApp = new Application(req.body); 
    // console.log("new application", newApp);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// Approve / Reject application
exports.updateStatus = async (req, res) => {
  try {
    const { id, action } = req.params;
    const app = await Application.findById(id);
    if (!app) return res.status(404).json({ message: "Application not found" });

    if (action === "approve") {
      app.status = "approved";
      app.applicationId = "MMA-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    } else if (action === "reject") {
      app.status = "rejected";
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    await app.save();
    res.json(app);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
