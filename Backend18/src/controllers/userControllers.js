import User from "../models/userSchema.js";

const getUsers = (req,res)=>{
    res.send("All Users")
};


const createUsers = async(req,res)=>{
    try {
        const { name, age } = req.body;
        const newUser = new User({ name, age });
        await newUser.save();
        res.send("New User Created");
    } catch (error) {
        console.log(error)
    }
    
    
   
};

export {getUsers,createUsers}