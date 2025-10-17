import mongoose from "mongoose";



const CONNECTDB = async(url)=>{
    try {
        await mongoose.connect(url)
        console.log("YOU'R DATABASE IS CONNECTED");
    } catch (error) {
        console.log(error)
    }
}

export default CONNECTDB;