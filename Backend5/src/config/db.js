import mongoose, { Mongoose } from "mongoose";



const CONNECTDB = async(url) =>{
    try {
        await mongoose.connect(url)
        console.log("DB CONNECTED");
        
    } catch (error) {
        console.log(error);
        
        
    }
}

export default CONNECTDB;