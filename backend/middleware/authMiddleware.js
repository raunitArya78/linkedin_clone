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