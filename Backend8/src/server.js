import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

dotenv.config()
const app = express();
app.use(express.json())
connectDB(process.env.MONGO_URL);

const PORT = process.env.PORT || 5000
app.get("/", (req,res)=>{
   res.send("HO GAYA")
})

app.listen(PORT , ()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
})