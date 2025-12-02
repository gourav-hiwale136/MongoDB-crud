
import express from "express";
import { addUser, getUser } from "../controller/userController.js";

const router = express.Router();

router.get("/get", getUser);
router.get("/create", addUser);

export default router;
