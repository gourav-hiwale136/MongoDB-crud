import express from "express"
import dotenv from "dotenv"
import connectDB from "../src/config/db.js"


dotenv.config()
const app = express()
app.use(express.json())
connectDB(process.env.MONGO_URL)

const PORT = process.env.PORT || 4444
app.get("/", (req, res)=>{
    res.send("ohhh...")
})

console.log(PORT);


app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
    
})