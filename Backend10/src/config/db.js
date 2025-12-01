import mongoose from "mongoose";


const CONNECTDB = async(MONGO_URL) => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ Database connection error:", error.message);
        
    }
};

export default CONNECTDB;