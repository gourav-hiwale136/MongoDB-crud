import express from "express"
import { DeleteUser, getUsers, Login, Signup, UpdateUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";



const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login" , Login);
userRouter.get("/get" , authMiddleware, getUsers);
userRouter.put("/update/:id", authMiddleware, UpdateUser);
userRouter.delete("/delete/:id", authMiddleware, adminMiddleware, DeleteUser);


export default userRouter;