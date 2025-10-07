import express, { Router } from 'express'
import User from '../models/newschema.js';
let userrouter = express.Router()
import { adduser, deleteuser, getall, getone, updateuser } from '../controllers/USercontroller.js';
import rolecheck from '../middleware/rolecheck.js';
userrouter.get("/",getall)
userrouter.get("/:id", getone);

userrouter.post("/",rolecheck,adduser);

userrouter.put("/:id", updateuser);

userrouter.delete("/:id", deleteuser);

export default userrouter 