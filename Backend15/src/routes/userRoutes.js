import express from "express"
import  { createUsers, getUsers } from "../controllers/userController.js"


const userRoutes = express.Router();

userRoutes.get("/get", getUsers);
userRoutes.post("/create", createUsers);

export default userRoutes;

