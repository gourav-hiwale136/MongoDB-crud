import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";


dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/product", productRouter)
app.use("/api/user", userRouter)
connectDB(process.env.MONGO_URL);


const PORT = process.env.PORT || 5656


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});