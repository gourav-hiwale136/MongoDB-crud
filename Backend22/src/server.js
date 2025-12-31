import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
connectDB(process.env.MONGO_URL);

app.use("/api/user",userRouter);
app.use("/api/product",productRouter)

const PORT = process.env.PORT || 4545

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});