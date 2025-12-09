import express from "express"
import { createUsers, getUsers } from "../controllers/userController.js";


const Router = express.Router();


Router.get("/add",getUsers);
Router.post("/create",createUsers);


export default Router;