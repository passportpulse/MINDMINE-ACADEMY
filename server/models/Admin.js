const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// ✅ Pre-save hook for hashing password
adminSchema.pre('save', async function (next) {
  try {
    // Only hash if password is new or modified
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
  } catch (err) {
    next(err); // pass error to Mongoose
  }
});

module.exports = mongoose.model('Admin', adminSchema);
