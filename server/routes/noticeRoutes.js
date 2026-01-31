const express = require("express");
const router = express.Router();
const { createNotice, getAllNotices, updateNotice, deleteNotice } = require("../controllers/noticeController");
const auth = require("../middleware/auth");
const multer = require("multer");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Routes
router.post("/", auth, upload.single("file"), createNotice);
router.get("/", getAllNotices);
router.put("/:id", auth, upload.single("file"), updateNotice);
router.delete("/:id", auth, deleteNotice);

module.exports = router;
