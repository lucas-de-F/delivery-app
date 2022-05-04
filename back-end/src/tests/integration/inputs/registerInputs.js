const newUser = {
  name: 'John Canabrava',
  email: 'johncana@email.com',
  password: '222222'
};

const invalidNewUser = {
  name: 'John Canabrava',
  email: 'zebirita@email.com',
  password: '222222'
}

const invalidNewUserBody = {
  name: 'John Canabrava',
  email: 151231,
  password: '222222'
}

module.exports = { newUser, invalidNewUser, invalidNewUserBody };
