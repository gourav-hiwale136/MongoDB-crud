import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    Title:{type:String,require:true},
    Price:{type:Number,require:true},
    Description:{type:String,}
});

const Product = mongoose.model("Products", productSchema);

export default Product;