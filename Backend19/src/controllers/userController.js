import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const Signup = async(req,res)=>{
    try {
    const { Username, Age, Email, Mobile, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10)

    const newUser = new User({
      Username,
      Age,
      Email,
      Mobile,
      Password:hashedPassword
    });

    await newUser.save();

    return res.status(201).json({
      message: "User Signup Successful",
      user: newUser
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

};


const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { Username, Age, Email, Mobile, Password } = req.body;

    let updateData = {
      Username,
      Age,
      Email,
      Mobile,
    };

    if (Password) {
      updateData.Password = await bcrypt.hash(Password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    console.log("REQ Password:", Password);

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    console.log("DB Password:", user.Password);

    const isPasswordMatch = await bcrypt.compare(Password, user.Password);

    console.log("Compare result:", isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { userId: user._id, Email: user.Email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    user.Password = undefined;

    return res.status(200).json({
      message: "Login Successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsers = async (req,res)=>{
  try {
    const getuser = await User.find();
    return res.status(201).json({message:"All Users Fetched Successfully", getuser});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Issues"});
  }
}


const DeleteUser = async (req,res)=>{
  try {
    const {id} = req.params;
    const deletedUsers = await User.findByIdAndDelete(id);
    if(!deletedUsers){
      res.status(404).json({
        message:"User Not Found",
      });
    }
    res.status(200).json({
      message:"User Deleted Successfully",
      user:deletedUsers
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Error",});
  }
};

export {Signup,Login,getUsers,UpdateUser,DeleteUser};