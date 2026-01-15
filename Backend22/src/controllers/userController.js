import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password, Role} = req.body;
        const hashedPassword = await bcrypt.hash(Password,10)
        const newUser = new User({
          Username,
          Email,
          Password: hashedPassword,
          Role: Email === "admin@gmail.com" ? "admin" : "user",
        });
        await newUser.save();
        return res.status(201).json({
            Message:"New User Created",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal server Issues"});
    };
};

const Login = async(req,res)=>{
    try {
        const { Email, Password } = req.body;
        const user = await User.findOne({ Email});
        if (!user) {
          return res.status(404).json({ Message: "User Not Found" });
        };
         
         const isPasswordMatch = await bcrypt.compare(Password,user.Password);
         if(!isPasswordMatch){
            return res.status(401).json({Message:"Invalid Password"});
         };

         const token = jwt.sign(
           { id: user._id, email: user.Email, Role: user.Role},
           process.env.JWT_SECRET,
           { expiresIn: "1d" }
         );

        if (user) {
          return res.status(201).json({
            Message: "Login Successfull",
            user,
            token
          });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"});
        
    };
};

const getUsers = async(req,res)=>{
    try {
        const getuser = await User.find();
        return res.status(201).json({Message:"All Users Fetched Successfully",user:getuser});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"});
    };
};

const UpdateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {Username,Email,Password} = req.body;
        const updateData = ({Username,Email,Password});
        const updatedUser = await User.findByIdAndUpdate(id,updateData,{new:true});
        if(!updatedUser){
            return res.status(404).json({Message:"User Not Found"});
        };
        res.status(200).json({Message:"User Updated Successfully",user:updatedUser})
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues",error});
    };
};


const DeleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedUsers = await User.findByIdAndDelete(id);
        if(!deletedUsers){
            return res.status(404).json({Message:"User Not Found"});
        };
        res.status(200).json({Message:"User Deleted Successfully",user:deletedUsers});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"})
    };
};

export {Signup,Login,getUsers,UpdateUser,DeleteUser};