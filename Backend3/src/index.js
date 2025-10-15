import express from "express"
import dotenv from "dotenv"
import ConnectDb from "../src/config/db.js"


dotenv.config()
const app = express()
app.use(express.json())
ConnectDb(process.env.MONGO_URL);


const PORT = process.env.PORT
app.get("/", (req,res)=>{
    res.send("hey...")
})
// console.log(PORT);


app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
  
})








