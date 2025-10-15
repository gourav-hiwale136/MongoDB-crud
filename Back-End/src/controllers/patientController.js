import Patient from "../models/patient.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// Register a new patient
export const registerPatient = async (req, res) => {
  const { name, email, password, age } = req.body;

  const existingPatient = await Patient.findOne({ email });
  if (existingPatient) {
    return res.status(400).json({ message: "Patient already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const patient = await Patient.create({
    name,
    email,
    password: hashedPassword,
    age,
  });

  res.status(201).json({
    _id: patient._id,
    name: patient.name,
    email: patient.email,
    token: generateToken(patient._id),
  });
};

// Login a patient
export const loginPatient = async (req, res) => {
  const { email, password } = req.body;
  const patient = await Patient.findOne({ email });

  if (patient && (await bcrypt.compare(password, patient.password))) {
    res.json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

// Get logged-in patient profile
export const getPatientProfile = async (req, res) => {
  const patient = await Patient.findById(req.user._id).select("-password");
  res.json(patient);
};
