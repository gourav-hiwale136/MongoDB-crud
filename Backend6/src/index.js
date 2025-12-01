import express from "express"
import dotenv from "dotenv"
import CONNECTDB from "../src/config/db.js"
import User from "../src/models/userSchema.js"


// maked the server
dotenv.config()
const app = express()
app.use(express.json())
CONNECTDB(process.env.MONGO_URL)

// routes
const PORT = process.env.PORT || 4444
app.get("/", (req, res)=>{
    res.send("YOU'R DATABASE CONNECTED")
})


app.post("/add", async(req, res)=>{
    try {
        const {Movie, Director} = req.body;
        console.log("Data Recieved", Movie,Director);
        const newUser = new User ({Movie,Director})
        await newUser.save()
        return res.status(200).json({
           message: "Data Fetch Successfully",
           data : newUser
        })
    } catch (error) {
        console.log("Data not found", error)
        res.status(500).json({
          message: "User saving problem",
          error: error.message
        });
    }
})


// start the server
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON https://localhost:${PORT}`)
})