const errorMap = {
  invalid: 400,
  notFound: 404,
  unauthorized: 401,
};

const domainError = (err, req, res) => {
  const status = errorMap[err.code];

  if (!status) {
    console.log(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  res.status(status).json({ message: err.message });
};

module.exports = domainError;
