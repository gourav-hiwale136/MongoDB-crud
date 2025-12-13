import User from "../models/userModel";

const SignUp = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body;
        const newUser = new User({Username,Email,Password});
        await newUser.save();
        return res.status(201)
    } catch (error) {
        
    }
};

const Login = (req,res)=>{
    res.send("bye")
};

export {SignUp,Login}