import User from "../models/userModels.js";
import bcrypt from "bcrypt"


export const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ Message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      Message: "New User Created",
      user: newUser,
    });
  } catch (error) {
    console.log("FULL ERROR 👉", error);
    return res.status(500).json({
      Message: "Internal Server Issues",
      error: error.message,
    });
  }
};



export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
         if (!user) {
              return res.status(404).json({ Message: "User Not Found" });
            }
        
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
        
              return res.status(401).json({ Message: "Invalid Password" });
            }

            res.status(200).json({
              Message: "Login Successful",
              user: user,
            });
    } catch (error) {
        return res.status(500).json({Message:"Internal Server Issues", error})
    }
};


export const getAll = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


