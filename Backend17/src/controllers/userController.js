import User from "../models/userSchema.js";


const getUsers = async(req,res) =>{
    res.send("All Users")
};


const createUsers = async(req,res) =>{
    // const {Movies,Director} = req.body;
    // const newUser = new User ({Movies,Director})
    res.send("Created New Users")

    // await newUser.save()
};


export {getUsers,createUsers}