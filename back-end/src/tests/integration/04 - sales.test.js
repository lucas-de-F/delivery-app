const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { validSale, invalidSaleBody } = require('./inputs/salesInputs');
const { validUser } = require('./inputs/loginInputs');

chai.use(chaiHttp);

const { expect } = chai;

describe('INTEGRATION TEST - Sales Route - ENDPOINT /sale', () => {
  let response = {};

  describe('1) - Create a new Sale', () => {
    describe('1) - When When Sucess', () => {
      before(async () => {
        const seller  = await chai
          .request(server)
          .post('/login')
          .send(validUser);

        const { token } = seller.body;
        response = await chai
          .request(server)
          .post('/sales')
          .set('Authorization', token)
          .send(validSale);
      });

      it('1) - Should return status code 201', () => {
        expect(response.status).to.be.equal(201);
      });

      it('2) - Should return a object', () => {
        expect(response.body).to.be.an('object');
      });

      it('3) - Should return a object with the correct keys', () => {
        expect(response.body).to.have.all.keys(
          'id',
          'userId',
          'sellerId',
          'totalPrice',
          'deliveryAddress',
          'deliveryNumber',
          'saleDate',
          'status',
          'products'
        );
      });
    });

    describe('2) - When When Fail', () => {
      describe('1) - When trying to create the product without the token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .post('/sales')
            .send(validSale);
        });

        it('1) - Should return status code 401', () => {
          expect(response.status).to.be.equal(401);
        });

        it('2) - Should return a object', () => {
          expect(response.body).to.be.an('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Token not found');
        });
      });

      describe('2) - When trying to create the product with an invalid fiel', () => {
        before(async () => {
          const seller  = await chai
            .request(server)
            .post('/login')
            .send(validUser);

          const { token } = seller.body;
          response = await chai
            .request(server)
            .post('/sales')
            .set('Authorization', token)
            .send(invalidSaleBody);
        });

        it('1) - Should return status code 400', () => {
          expect(response.status).to.be.equal(400);
        });

        it('2) - Should return a object', () => {
          expect(response.body).to.be.an('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('"deliveryAddress" must be a string');
        });
      });
    });
  });

  describe('2) - Get all Sales', () => {
    describe('1) - When When Sucess', () => {
      before(async () => {
        const customer  = await chai
          .request(server)
          .post('/login')
          .send(validUser);

        const { token } = customer.body;

        response = await chai
          .request(server)
          .get('/sales/3')
          .set('Authorization', token);
      });

      it('1) - Should return status code 200', () => {
        expect(response.status).to.be.equal(200);
      });

      it('2) - Should return a array', () => {
        expect(response.body).to.be.an('array');
      });

      it('3) - Should return a object with the correct keys', () => {
        expect(response.body[0]).to.have.all.keys(
          'id',
          'userId',
          'sellerId',
          'totalPrice',
          'deliveryAddress',
          'deliveryNumber',
          'saleDate',
          'status',
          'products'
        );
      });
    });

    describe('2) - When When Fail', () => {
      describe('1) - When trying to get the products without the token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/sales/3');
        });

        it('1) - Should return status code 401', () => {
          expect(response.status).to.be.equal(401);
        });

        it('2) - Should return a object', () => {
          expect(response.body).to.be.an('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
        });
      });
    });
  });
});
