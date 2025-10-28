import express from "express"
import dotenv from "dotenv"
import connectDB from "../src/config/db.js"
import User from "../src/models/userSchema.js"
import bookrouter from "./routes/bookroutes.js"
import userRouter from "./routes/userroutes.js"

dotenv.config()
const app = express()
app.use(express.json())
connectDB(process.env.MONGO_URL)


const PORT = process.env.PORT || 5555
app.get("/",(req,res)=>{
    res.send("Database is connected")
})

app.use("/book",bookrouter)
app.use("/user",userRouter)





app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
})