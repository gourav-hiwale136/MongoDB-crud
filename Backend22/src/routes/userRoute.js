import express from "express"
import { Signup, Login, getUsers, UpdateUser, DeleteUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login", Login); 
userRouter.get("/get",authMiddleware, adminMiddleware, getUsers);
userRouter.put("/update/:id", authMiddleware, UpdateUser);
userRouter.delete("/delete/:id",authMiddleware, adminMiddleware, DeleteUser)

export default userRouter;