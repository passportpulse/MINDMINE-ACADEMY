const express = require("express");
const router = express.Router();
const { getAllApplications, createApplication, updateStatus } = require("../controllers/applicationController");
const auth = require("../middleware/auth");

router.get("/", auth, getAllApplications);
router.post("/", createApplication); 
router.patch("/:id/:action", auth, updateStatus);

module.exports = router;
