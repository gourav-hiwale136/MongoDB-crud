import express from "express"
import dotenv from "dotenv"
import Routes from "./routes/userRoutes.js";



dotenv.config()
const app = express();
app.use(express.json())



app.use("/users", Routes);



const PORT = process.env.PORT || 6666

app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})