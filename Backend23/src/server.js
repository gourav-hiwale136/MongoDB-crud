import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB(process.env.MONGO_URL)


const PORT = process.env.PORT || 4545

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
});