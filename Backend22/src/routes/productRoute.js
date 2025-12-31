import express from "express";
import postProduct from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post("/post", postProduct);


export default productRouter;