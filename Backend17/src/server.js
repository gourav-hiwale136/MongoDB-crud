import express from "express"
import dotenv from "dotenv"
import routes from "./routes/userRoutes.js"
import User from "./models/userSchema.js"

dotenv.config()
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 6666

// app.get("/",(req,res)=>{
//     res.send("hey")
// });

app.use("/user", routes)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});