import mongoose from "mongoose";



const CONNECTDB = async(url)=>{
    try {
        await mongoose.connect(url)
        console.log("connected")
    } catch (error) {
        console.log(error)
        
    }
}

export default CONNECTDB;