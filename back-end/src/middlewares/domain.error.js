const errorMap = {
  invalid: 400,
  notFound: 404,
  unauthorized: 401,
};

const domainError = (err, req, res, next) => {
  const status = errorMap[err.code];

  if (!status) return next(err);

  res.status(status).json({ message: err.message });
};

module.exports = domainError;
