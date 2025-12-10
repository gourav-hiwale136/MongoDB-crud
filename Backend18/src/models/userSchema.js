import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    age : {type : Number , required : true}
});

const User = mongoose.model("Users", userSchema);

export default User;