const chai = require('chai');
const chaiHttp = require('chai-http');
const shell = require('shelljs');

const server = require('../../api/app');
const { validUser, invalidUserEmail, invalidUserBody, invalidUserPasswod } = require('./inputs/loginInputs');

chai.use(chaiHttp);

const { expect } = chai;

before(() => {
  shell.exec('npm run db:reset');
})

describe('INTEGRATION TEST - Login Route - ENDPOINT /login', () => {
  let response = {};

  describe('1) - When Sucess', async () => {
    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(validUser);
    });

    it('1) - should return a status code of 200', () => {
    expect(response).to.have.status(200);
    });

    it('2) - should return a object', async () => {
      expect(response.body).to.be.a('object');
    });

    it('3) - should return a object with a token', async () => {
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string');
    });
  });

  describe('2) - When Fail', async () => {
    describe('1) - If User doesn\'t exist', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserEmail);
      })

      it('1) - should return a status code of 404', () => {
        expect(response).to.have.status(404);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a error message', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('User not exists');
      });
    });

    describe('2) - If User exists but password is incorrect', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserPasswod);
      })

      it('1) - should return a status code of 401', () => {
        expect(response).to.have.status(401);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a error message', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('Incorrect email or password');
      });
    })

    describe('3) - If body have invalid fields', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/login')
          .send(invalidUserBody);
      })

      it('1) - should return a status code of 400', () => {
        expect(response).to.have.status(400);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a error message', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('"email" must be a string');
      });
    })
  });
});
