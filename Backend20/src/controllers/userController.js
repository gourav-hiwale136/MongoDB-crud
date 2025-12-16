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

const UpdateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {Username,Email,Password}  = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, {
          Username,
          Email,
          Password,
        },{new:true});

        if(!updatedUser){
            return res.status(404).json({
                message:"User Not Found"})
        }

        return res.status(200).json({
            message:"User Updated Successfully",
            user: updatedUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:"Internal Server Issues"
        });
    }
};

const DeleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {Username,Email,Password} = req.body;
        const deletedUsers = await User.findByIdAndDelete(id)
        if(!deletedUsers){
            return res.status(404).json({
                message:"User Not Found",
            }); 
        }

         return res.status(201).json({
            message:"User Deleted Successfully",
            users: deletedUsers
         });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:"internal Server Issues"
        });
        
    };
};

export {Signup,Login,UpdateUser,DeleteUser}