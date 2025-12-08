import mongoose from "mongoose";



const userSchema =new mongoose.Schema({

      Movie :{
        type : String,
        required : true
      },

      Director :{
        type : String,
        required : true
      }
});


const User = mongoose.model("Cinema", userSchema);

export default User