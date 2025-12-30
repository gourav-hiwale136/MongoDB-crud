import jwt from "jsonwebtoken";


const authMiddleware = (req,res,next)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(401).json({Message:"Token Missing"});
        };
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
         next();
    } catch (error) {
        return res.status(500).json({Message:"Invalid Token"});
    }
};

export default authMiddleware;