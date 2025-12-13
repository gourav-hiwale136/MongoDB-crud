import User from "../models/userModel.js";


const Signup = async(req,res)=>{
    try {
    const { Username, Age, Email, Mobile, Password } = req.body;

    const newUser = new User({
      Username,
      Age,
      Email,
      Mobile,
      Password
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


const UpdateUser = async(req,res)=>{
  try {
    const {id} = req.params;
    const {Name,Age,Email,Mobile,Password} = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, {
      Name,
      Age,
      Email,
      Mobile,
      Password,
    },{new:true});

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
    const users = await User.find(); // fetch all users

    return res.status(200).json({
      message: "All Users Fetched Successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

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

export {Signup,Login,UpdateUser,DeleteUser};