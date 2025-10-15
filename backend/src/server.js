import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/newschema.js'
import userrouter from './routes/Userroutes.js'
dotenv.config()
const app = express()
app.use(express.json())

connectDB()

app.use("/User",userrouter)
const port=process.env.PORT


app.get("/", (req, res) => {
  res.send("Database Connected...");
});


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})