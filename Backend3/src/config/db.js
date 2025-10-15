import mongoose from "mongoose"


const ConnectDb = async (url)=>{
      try {
        await mongoose.connect(url)
        console.log("db connected");
        
      } catch (error) {
        console.log(error);
        
      }
}


export default ConnectDb




