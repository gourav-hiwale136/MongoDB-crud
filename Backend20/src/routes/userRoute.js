import express from "express";
import { SignUp } from "../controllers/userController";

const userRouter = express.Router();


userRouter.post("/signup",SignUp);



export default userRouter();