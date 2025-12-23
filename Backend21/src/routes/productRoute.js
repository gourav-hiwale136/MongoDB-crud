import express from "express"
import {getProduct, postProduct,} from "../controllers/productController.js";



const productRouter = express.Router();

productRouter.post("/create",postProduct);
productRouter.post("/get",getProduct);

export default productRouter;