import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signup = async (req, res) => {
  try {
    const { Username, Age, Email, Mobile, Password } = req.body;

    // prevent duplicate email
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = await User.create({
      Username,
      Age,
      Email,
      Mobile,
      Password: hashedPassword,
    });

    const userData = newUser.toObject();
    delete userData.Password;

    return res.status(201).json({
      message: "User Signup Successful",
      user: userData,
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

    const updateData = { Username, Age, Email, Mobile };

    if (Password) {
      updateData.Password = await bcrypt.hash(Password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      select: "-Password",
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

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordMatch = await bcrypt.compare(Password, user.Password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userData = user.toObject();
    delete userData.Password;

    return res.status(200).json({
      message: "Login Successful",
      user: userData,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-Password");

    return res.status(200).json({
      message: "All Users Fetched Successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id).select("-Password");

    if (!deletedUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json({
      message: "User Deleted Successfully",
      user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { Signup, Login, getUsers, UpdateUser, DeleteUser };
