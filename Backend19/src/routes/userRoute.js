import express from "express"
import { Login, Signup, UpdateUser} from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/create", Signup);
userRouter.get("/get" , Login);
userRouter.put("/update/:id",UpdateUser)


export default userRouter;