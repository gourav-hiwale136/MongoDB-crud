import express from "express";
import dotenv from "dotenv";
import connectDB  from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";


dotenv.config();
const app = express();
connectDB(process.env.MONGO_URL)
app.use(express.json());
const PORT = process.env.PORT  || 5000

app.use("/api/user", userRouter)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});