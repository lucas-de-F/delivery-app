const jwtDomainError = (err, _req, res, next) => {
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }

    /* istanbul ignore if */
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Token expired' });
  }

  next(err);
};

module.exports = jwtDomainError;
