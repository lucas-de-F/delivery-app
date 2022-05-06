const { verifyToken } = require('../utils/jwt');

const verify = (permission) => (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  const { role } = verifyToken(authorization);

  if (permission && (role !== 'administrator' && role !== permission)) {
    return res.status(403).json({ error: 'You are not authorized' });
  }

  next();
};

module.exports = verify;
