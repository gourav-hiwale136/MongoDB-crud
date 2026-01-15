import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
//   { timestamps: true }
);

// ⚠️ DO NOT ADD _id FIELD

const User = mongoose.model("User", userSchema);
export default User;
