const { verifyToken } = require('../utils/jwt');

const verify = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const { role } = verifyToken(authorization);

    console.log(role);

    if (role !== 'administrator' && role !== 'seller') {
      return res.status(403).json({ error: 'You are not authorized' });
    }

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verify;
