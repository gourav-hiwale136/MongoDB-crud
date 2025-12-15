import express from "express";
import { Signup, Login } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.get("/get", Login)

export default userRouter;