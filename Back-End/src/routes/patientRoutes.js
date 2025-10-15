import express from "express";
import { registerPatient, loginPatient, getPatientProfile,} from "../controllers/patientController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
console.log(authMiddleware);

const router = express.Router();

router.post("/register", registerPatient); // /api/patients/register
router.post("/login", loginPatient); // /api/patients/login
router.get("/profile", authMiddleware, getPatientProfile); // /api/patients/profile

export default router;
