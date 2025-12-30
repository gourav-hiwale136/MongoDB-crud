import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    Username:{type: String,require:true},
    Email:{type:String,require:true},
    Password:{type:String,require:true},
    Role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
    
});

const User = mongoose.model("User",userSchema);

export default User;