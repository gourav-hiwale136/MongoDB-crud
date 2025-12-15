import User from "../models/userModel.js";

const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body;
        const newUser = new User({Username,Email,Password});
        await newUser.save();
        return res.status(200).json({
          message: "Signup Successfully",
          user: newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal Server issue"})
    }
};


const Login = async(req,res)=>{
    try {
       const users = await User.find();
       return res.status(200).json({
        message:"All Users Fetched Successfully",
        users,
       })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Issue",

        })
        
    }
};

export {Signup,Login}