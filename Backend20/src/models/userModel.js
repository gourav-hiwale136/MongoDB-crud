import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "Username": {type:String},
    "Email": {type:String},
    "Password": {type:String , Required : true}
});

const User = mongoose.model("Users", userSchema)

export default User;