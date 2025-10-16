import express from "express"
import dotenv from "dotenv"
import CONNECTDB from "../src/config/db.js"
import User from "../src/models/userSchema.js"

dotenv.config()
const app = express()
app.use(express.json())
CONNECTDB(process.env.MONGO_URL)



// ROUTE
const PORT = process.env.PORT || 4444
app.get("/", (req, res)=>{
    res.send("SERVER IS CONNECTED")
})

app.post ("/add", async(req, res)=>{
    // console.log("✅ POST /add route hit");
    try {
        const {name, age} = req.body
        console.log("Recieved data", name, age);
        
        const newUser = new User ({name, age});
        await newUser.save();

        res.status(201).json({
            message: "User added successfully!",
            data: newUser
        })
        console.log(newUser);
    } catch (error) {
        res.status(500).json({
            message: "Error saving User"
            
            
        })
    }
})

app.get("/find", async(req,res)=>{
  try {
      const user =await User.find() 
      res.send(200).json({
          message:"all user's found successfully",
          data : user
        })
    } catch (error) {
      console.log(error);
      
    }
})

// START THE SERVER 
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
    
})