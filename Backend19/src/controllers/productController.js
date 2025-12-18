import Product from "../models/productModel.js";


const PostProduct = async(req,res)=>{
    try {
        const {Title,Price,Description} = req.body;
        const newProduct = new Product({ Title, Price, Description });
        await newProduct.save();
        return res.status(201).json({message:"New Product Created Successfully", product: newProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Issues"});
        
    }
};


export default PostProduct;