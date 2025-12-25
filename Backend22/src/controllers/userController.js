import User from "../models/userModel.js";


const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body;
        const newUser = new User ({Username,Email,Password});
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
        const user = await User.findOne({ Email });
        if (!user) {
          return res.status(404).json({ Message: "User Not Found" });
        }

        if (user) {
          return res.status(201).json({
            Message: "Login Successfull",
            user,
          });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"});
        
    };

};

export {Signup,Login};