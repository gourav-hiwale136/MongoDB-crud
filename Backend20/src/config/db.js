import mongoose from "mongoose";

const connectDB = async(URL)=>{
    try {
        await mongoose.connect(URL)
        console.log("DB CONNECTED")
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;