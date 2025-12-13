import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    "Username":{type:String},
    "Email":{type:String, required:true},
    "Password":{type:String, required:true}
});

const User = mongoose.model("users", userSchema);

export default User;