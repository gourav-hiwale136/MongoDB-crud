import express from "express"
import Signup from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/signup", Signup);


export default userRouter;