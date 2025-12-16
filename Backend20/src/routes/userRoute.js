import express from "express";
import { Signup, Login, UpdateUser, DeleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.get("/get", Login);
userRouter.put("/update/:id", UpdateUser);
userRouter.delete("/delete/:id", DeleteUser);


export default userRouter;