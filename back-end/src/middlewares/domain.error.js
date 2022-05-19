const errorMap = {
  invalid: 400,
  notFound: 404,
  unauthorized: 401,
  conflict: 409,
};

const domainError = (err, _req, res, _next) => {
  const status = errorMap[err.code];

    /* istanbul ignore next */
  if (status) {
    return res.status(status).json({ error: err.message });
  }
  /* istanbul ignore next */

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  /* istanbul ignore next */
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Token expired' });
  }
  /* istanbul ignore next */

  console.log(err);
  /* istanbul ignore next */
  return res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = domainError;
