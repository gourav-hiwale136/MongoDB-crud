import express from "express"
import { createUsers, getUsers } from "../controllers/userControllers.js";

const Router = express.Router();

Router.get("/get", getUsers);
Router.post("/create", createUsers);

export default Router;