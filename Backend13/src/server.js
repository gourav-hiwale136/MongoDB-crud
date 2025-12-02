import express, { Router } from "express"
import dotenv from "dotenv"
import  Routes from "../src/routes/userRoute.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use("/users", Routes)

const PORT = process.env.PORT || 8888

// app.get("/",(req,res)=>{
//     res.send("server connected")
// })



app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
})