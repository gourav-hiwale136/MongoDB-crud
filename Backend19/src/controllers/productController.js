import Product from "../models/productModel.js";


const PostProduct = async (req, res) => {
  try {
    const { Title, Price, Description } = req.body;

    // basic validation
    if (!Title || !Price) {
      return res.status(400).json({
        message: "Title and Price are required",
      });
    }

    const newProduct = await Product.create({
      Title,
      Price,
      Description,
      createdBy: req.user.userId, // from auth middleware
    });

    return res.status(201).json({
      message: "New Product Created Successfully",
      product: newProduct,
    });

  } catch (error) {
    console.log("POST PRODUCT ERROR 👉", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};





export default PostProduct;