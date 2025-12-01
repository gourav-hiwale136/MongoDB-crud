import mongoose from "mongoose";


const newSchema = new mongoose.Schema({
    Movie:{type: String,required: true},
    Director:{type: String,required: true},
    Rating:{type: Number,required:true},
    Age :{type:Number,required:true}
})

const User = mongoose.model("User", newSchema)

export default User;

