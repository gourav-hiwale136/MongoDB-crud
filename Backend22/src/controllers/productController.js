import Product from "../models/productModel.js";


const postProduct = async(req,res)=>{
    try {
        const {Title,Price,Description} = req.body;
        const newProduct = new Product({ Title, Price, Description });
        await newProduct.save();
        return res.status(201).json({Message:"New Product Added", Product:newProduct})
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"Internal Server Isssues"});
        
    }
};

export default postProduct;