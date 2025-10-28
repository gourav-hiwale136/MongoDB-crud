import mongoose from "mongoose"


const connectDB = async(url)=>{
    try {
        await mongoose.connect(url)
        console.log("You'r Database is connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;