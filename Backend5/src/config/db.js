import mongoose, { Mongoose } from "mongoose";



const CONNECTDB = async(url) =>{
    try {
        await mongoose.connect(url)
        console.log("ARE ZALN NA CONNECT");
        
    } catch (error) {
        console.log(error);
        
        
    }
}

export default CONNECTDB