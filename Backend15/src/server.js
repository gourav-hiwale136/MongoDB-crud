import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js";

dotenv.config()
const app = express();
app.use(express.json())
app.use("/users", userRoutes)


const PORT = process.env.PORT || 4242


// app.get("/",(req,res)=>{
//     res.send("Server Started")
// })


app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
});