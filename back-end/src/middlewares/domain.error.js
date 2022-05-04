const errorMap = {
  invalid: 400,
  notFound: 404,
  unauthorized: 401,
};

const domainError = (err, req, res, next) => {
  const status = errorMap[err.code];

  if (status) {
    return res.status(status).json({ error: err.message });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }

  console.log(err);
  res.status(500).json({ error: 'Internal Server Error' });
  next();
};

module.exports = domainError;
