import express from "express"
import PostProduct from "../controllers/productController.js";



const productRouter = express.Router();


productRouter.post("/postProduct",PostProduct);



export default productRouter;