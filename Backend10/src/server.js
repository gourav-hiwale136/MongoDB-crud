import express from "express";
import dotenv from "dotenv";
import CONNECTDB from "./config/db.js";
import User from "./models/userSchema.js";

dotenv.config();
const app = express();
app.use(express.json());
CONNECTDB(process.env.MONGO_URL)


const PORT = process.env.PORT
app.get("/", (req, res) => {
  res.send("Hello from my first server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
