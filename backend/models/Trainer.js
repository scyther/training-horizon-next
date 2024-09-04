const mongoose = require("mongoose");
const { boolean } = require("zod");

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualifications: { type: String, required: true },
  linkedin: { type: String, required: true },
  experience: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ 
  },
  availability: { type: [String], default: [], required: false },
  phone: { type: String, required: true }, 
  address: { type: String, required: true },
  password: { type: String, required: true },
  isApproved: { type: Boolean, default: false } 
}, {
  timestamps: true 
});

module.exports = mongoose.model('Trainer', trainerSchema);

// Index for performance improvement on email field
// trainerSchema.index({ email: 1 });

// module.exports = mongoose.model("Trainer", trainerSchema); 
