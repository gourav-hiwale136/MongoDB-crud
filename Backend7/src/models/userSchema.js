import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    book : {type:String, required: true},
    auther : {type:String, required: true}
});


const User = mongoose.model("User", userSchema);

export default User;





// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   book: { type: String, required: true },
//   auther: { type: String, required: true }
// });

// const User = mongoose.model("User", userSchema);

// export default User;
