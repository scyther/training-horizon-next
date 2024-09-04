const Trainer = require("../models/Trainer");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const signUpSchema = z.object({
  fname: z.string().min(1, "Name is required"),
  lname: z.string().min(1, "Name is required"),
  qualifications: z.string().min(1, "Qualifications are required"),
  linkedin: z.string().url("Invalid LinkedIn URL"),
  experience: z.string().min(1, "Experience is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  availability: z.array(z.string()).optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Trainer Sign-up
exports.signUpTrainer = async (req, res) => {
  try {
    const validatedData = signUpSchema.parse(req.body);

    // checking existence
    const existingTrainer = await Trainer.findOne({ email: validatedData.email });
    if (existingTrainer) {
      return res.status(409).json({ message: "Trainer already exists" });
    }

    // salting password
    // const salt = await bcrypt.genSalt(10);
    // validatedData.password = await bcrypt.hash(validatedData.password, salt);

    // Create new trainer
    const trainer = new Trainer(validatedData);
    await trainer.save();

    // Generate JWT
    const token = jwt.sign({ id: trainer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Trainer Login
exports.loginTrainer = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    // Find trainer by email
    const trainer = await Trainer.findOne({ email: validatedData.email });
    if (!trainer) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    // const isMatch = await bcrypt.compare(validatedData.password, trainer.password);
    // if (!isMatch) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }

    // Generate JWT
    const token = jwt.sign({ id: trainer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
