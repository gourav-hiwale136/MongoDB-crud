import Product from "../models/productModel.js";

const postProduct = async(req,res)=>{
       try {
        const {Title,Price} = req.body;
        const newProduct = new Product({ Title, Price });
        await newProduct.save();
        return res.status(201).json({
            Message:"New Product Created",
            newProduct
        })
       } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"});
       }
};


const getProduct = async(req,res)=>{
    try {
        const product = await Product.find();
        return res.status(201).json({
            Message:"All Product Fetched Succeessfully",
            product 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"})
    }
}

export {postProduct,getProduct};