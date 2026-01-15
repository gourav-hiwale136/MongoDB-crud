import User from "../models/userModel.js";
import bcrypt from "bcrypt";


const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10)
        const newUser = User({Username,Email,Password:hashedPassword});
        await newUser.save();
        return res.status(201).json({
            Message: "New User created", User:newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"})
        
    }
};

const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ Message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {

      return res.status(401).json({ Message: "Invalid Password" });
    }

    // remove password safely
    const userData = user.toObject();
    delete userData.Password;

    res.status(200).json({
      Message: "Login Successful",
      user: userData,
    });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};


export  {Signup,Login};