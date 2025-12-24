import jwt from "jsonwebtoken";


const userAuthMiddleware = (req,res,next)=>{
    try {
        const Token = req.headers.authorization;
        if(!Token){
            return res.status(404).json({Message:"Token Missing"});
        };

        const Decoded = jwt.verify(Token,process.env.JWT_SECRET);
        req.user = Decoded;
        next();
    } catch (error) {
        return res.status(201).json({Message:"Invalid Or Expire Token"});
        
    };
};


export default userAuthMiddleware;