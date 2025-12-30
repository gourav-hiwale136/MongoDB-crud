const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.Role !== "admin") {
      return res.status(403).json({
        Message: "Access Denied: Admin Only",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ Message: "Server Error" });
  }
};

export default adminMiddleware;
