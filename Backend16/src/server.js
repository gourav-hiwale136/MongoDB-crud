import express from "express"
import dotenv from "dotenv"
import connectDB from "../src/config/db.js";
import User from "../src/models/userSchema.js"

dotenv.config();
const app = express();
connectDB(process.env.MONGO_URL);
app.use(express.json())

const PORT = process.env.PORT || 4545
app.get("/",(req,res)=>{
    res.send("Welcome to our server")
});

app.post("/add", async(req,res)=>{
    const {Movie, Director} = req.body
    const newUser = new User ({Movie,Director})
    res.send("Data Recieved", Movie,Director)
    await newUser.save()
});

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
});