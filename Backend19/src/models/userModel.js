import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    
    "Username":{type:String},
    "Age":{type:Number},
    "Email":{type:String},
    "Mobile":{type:Number, required:true},
    "Password":{type:String, required:true}
});

const User = mongoose.model("Users", userSchema);

export default User;