import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  Username: { type: String },
  Age: { type: Number },
  Email: { type: String },
  Mobile: { type: Number, required: true },
  Password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("Users", userSchema);

export default User;