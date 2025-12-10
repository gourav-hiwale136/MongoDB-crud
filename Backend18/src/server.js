import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import routes from "../src/routes/userRoutes.js"
import User from "./models/userSchema.js";

dotenv.config();
const app = express();
connectDB(process.env.MONGO_URL)
app.use(express.json());

const PORT = process.env.PORT || 4564

app.use("/user",routes,)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});