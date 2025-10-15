import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";


dotenv.config(); // load .env variables
connectDB(); // connect to MongoDB

const app = express();

app.use(express.json()); // parse JSON requests
app.use(cors()); // enable CORS for frontend

// ROUTE
app.get("/", (req, res) => {
  res.send("MediConnect API is running...");
});

// START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
