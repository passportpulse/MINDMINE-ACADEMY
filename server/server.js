require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const adminAuthRoutes = require("./routes/adminAuth");
const enquiryRoutes = require("./routes/enquiryRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

const app = express();

// ✅ middleware (ORDER MATTERS)
app.use(cors());            // allow frontend requests
app.use(express.json());   // parse JSON body

// ✅ routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/application", applicationRoutes);
app.use("/api/notice", noticeRoutes);

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("MindMine API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
