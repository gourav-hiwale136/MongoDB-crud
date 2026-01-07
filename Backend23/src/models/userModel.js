import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    Username:{type:String,require:true},
    Email:{type:String,require:true},
    Password:{type:String,require:true}
    
});

const User = mongoose.model("Users", userSchema);

export default User