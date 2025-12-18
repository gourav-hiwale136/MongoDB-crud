import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    "Title":{type:String},
    "Price":{type:Number},
    "Description":{type:String}
});

const Product = mongoose.model("Products",productSchema);

export default Product;