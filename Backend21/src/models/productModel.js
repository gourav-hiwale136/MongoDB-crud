import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    "Title":{type:String,required:true},
    "Price":{type:Number,required:true}
});

const Product = mongoose.model("Products", productSchema);

export default Product;