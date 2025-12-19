import express from "express"
import { DeleteUser, getUsers, Login, Signup, UpdateUser } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login" , Login);
userRouter.get("/get" , getUsers);
userRouter.put("/update/:id",UpdateUser);
userRouter.delete("/delete/:id",DeleteUser)


export default userRouter;