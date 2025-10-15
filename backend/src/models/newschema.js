import mongoose from "mongoose";


const Userschema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, default:"user"},
})

const User = mongoose.model("Usermodel",Userschema)

export default User