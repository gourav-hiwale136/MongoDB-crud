import UserModel from "../models/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()
export const signupfun = async (req,res) => {   
    try {
      const { name, email, password, role } = req.body;

      const existinguser =await UserModel.findOne({email})
      
      if (existinguser){
        res.status(400).json({message : "User Already exists" , existinguser })
      }


      const hashed_pass = await bcrypt.hash(password, 10);

      const signupUser = await UserModel.create({
        name,
        email,
        password: hashed_pass,
        role,
      });

      res.json({ message: "user created", signupUser });
    } catch (error) {
      console.log(error);
    }
}


export const loginfun = async (req,res) => {
    try {
      const { email, password } = req.body;

      let userexists =await UserModel.findOne({ email });

      if (!userexists)
        return res.status(400).json({ message: "User does not exist" });

      let ismatch =await bcrypt.compare(password, userexists.password);

      if (!ismatch)
        return res.status(400).json({ message: "invalid credentials" });

      let token = jwt.sign(
        {
          name: userexists.name,
          email: userexists.email,
          password: userexists.password,
          role: userexists.role,
        },
        process.env.secret_key,
        { expiresIn: "1h" }
      );

      res.json({message:"Login successfull",token})
    } catch (error) {
      console.log(error);
    }

}