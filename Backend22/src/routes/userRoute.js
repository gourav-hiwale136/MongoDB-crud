import express from "express"
import { Signup, Login, getUsers, UpdateUser, DeleteUser } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login", Login); 
userRouter.get("/get", getUsers);
userRouter.put("/update/:id", UpdateUser);
userRouter.delete("/delete/:id", DeleteUser)

export default userRouter;