import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";


dotenv.config();
const app = express();
connectDB(process.env.MONGO_URL)
app.use(express.json())
app.use("/api/user", userRouter)


const PORT = process.env.PORT || 4545

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
});