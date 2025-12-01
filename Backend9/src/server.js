import express from "express"
import dotenv from "dotenv"
import CONNECTDB from "../src/config/db.js"
import User from "../src/models/newSchema.js"
// import syncSchema  from "../src/utils/syncSchema.js"

dotenv.config()
const app = express()
app.use(express.json())
CONNECTDB(process.env.MONGO_URL)

const PORT = process.env.PORT
app.get("/", (req,res)=>{
    res.send("Database is connected")
})

app.post("/add", async(req,res)=>{
    const {Movie, Director} = req.body
    console.log("Data Recieved", Movie, Director)
    const newUser = new User ({Movie, Director})
    await newUser.save()
    return res.status(201).json({
        message: "Data Fetch Successfully",
        data : newUser
    })

})

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON HTTP://LOCALHOST:${PORT}`)
})