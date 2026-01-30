const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      unique: true,
      required: true
    },

    // Campus & Course
    campus: String,
    campusLocation: String,
    course: String,

    // Student info
    fullName: String,
    dob: Date,
    gender: String,
    caste: String,
    aadhaar: String,
    nationality: {
      type: String,
      default: "Indian"
    },
    address: String,
    city: String,
    state: {
      type: String,
      default: "West Bengal"
    },
    pinCode: String,
    phone: String,
    email: String,

    // Father
    fatherName: String,
    fatherOccupation: String,
    fatherPhone: String,

    // Mother
    motherName: String,
    motherOccupation: String,
    motherPhone: String,

    // Guardian (optional)
    guardianName: String,
    guardianRelation: String,
    guardianPhone: String,

    // Status tracking
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },

    registrationId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
