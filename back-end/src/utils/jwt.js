const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const secret = readFileSync(resolve(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf8').trim();

const sign = (payload) => 
  jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  module.exports = {
    sign,
  };
