import express from 'express'
import { addNew, getAll } from '../controller/bookcontroller.js';

let bookrouter = express.Router()

bookrouter.post("/add",addNew);


bookrouter.get("/get",getAll );

export default bookrouter