import jwt from "jsonwebtoken";

const userAuthMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ Message: "Token Missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ Message: "Invalid or Expired Token" });
  }
};

export default userAuthMiddleware;
