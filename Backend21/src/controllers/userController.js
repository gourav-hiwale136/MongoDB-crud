import User from "../models/userModel.js";
import bcrypt from "bcrypt"


const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body;
        const hashedPassword = await bcrypt.hash(Password,10)
        const newUser = new User({
             Username,
             Email, 
             Password : hashedPassword
            });
        await newUser.save();
        return res.status(201).json({
            Message:"New User Created",
            User: newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"})
    }
};




export {Signup}