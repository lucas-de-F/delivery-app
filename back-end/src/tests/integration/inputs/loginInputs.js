const validUser = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$'
};

const invalidUserEmail = {
  email: 'zuleid@cachaça.com',
  password: 'betonetofofo'
};

const invalidUserPasswod = {
  email: 'zebirita@email.com',
  password: 'betonetofofo'
};

const invalidUserBody = {
  email: 151231,
  password: 'betonetofofo'
};

module.exports = { validUser, invalidUserEmail, invalidUserBody, invalidUserPasswod };
