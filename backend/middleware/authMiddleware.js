// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// exports.protect = async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }
//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };
// exports.authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "User role not authorized" });
//     }
      
//     next();
//   };
// };



const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
  const token = req.cookies.token; 
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.status(401).send('Invalid Token');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};
module.exports = authenticate;