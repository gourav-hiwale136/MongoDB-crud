import express from "express"
import { getUsers,createUsers } from "../controllers/userController.js";

const Router = express.Router();


Router.get("/get",getUsers);
Router.get("/create",createUsers);


export default Router;