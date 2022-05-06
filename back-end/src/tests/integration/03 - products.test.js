const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { 
  newProduct,
  validSeller,
  invalidNewProduct,
  validUpdateProduct
} = require('./inputs/productsInputs');
const { validUser } = require('./inputs/loginInputs');

chai.use(chaiHttp);

const { expect } = chai;

describe('INTEGRATION TEST - Products Route - ENDPOINT /products', () => {
  let response = {};

  describe('1) - Create a new product', async () => {
    describe('1) - When Sucess', () => {
      before(async () => {
        const seller  = await chai
          .request(server)
          .post('/login')
          .send(validSeller);

        const { token } = seller.body;
        response = await chai
          .request(server)
          .post('/products')
          .set('Authorization', token)
          .send(newProduct);
      });

      it('1) - should return a status code of 200', () => {
      expect(response).to.have.status(201);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a token', async () => {
        expect(response.body).to.have.all.keys([
          'id',
          'name',
          'price',
          'urlImage',
        ]);
        expect(response.body).to.deep.equal({
          id: 12,
          ...newProduct,
        });
      });
    });

    describe('2) - When Fail', () => {
      describe('1) - When trying to create the product without the token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .post('/products')
            .send(newProduct);
        });

        it('1) - should return a status code of 401', () => {
          expect(response).to.have.status(401);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Token not found');
        });
      })

      describe('2) - When trying to create the product with an invalid token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .post('/products')
            .set('Authorization', 'invalidtoken')
            .send(newProduct);
        });

        it('1) - should return a status code of 401', () => {
          expect(response).to.have.status(401);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Invalid token');
        });
      });

      describe('3) - When trying to create the product with an invalid permission', () => {
        before(async () => {
          const user  = await chai
            .request(server)
            .post('/login')
            .send(validUser);

          const { token } = user.body;

          response = await chai
            .request(server)
            .post('/products')
            .set('Authorization', token)
            .send(newProduct);
        });

        it('1) - should return a status code of 403', () => {
          expect(response).to.have.status(403);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('You are not authorized');
        });
      });

      describe('4) - When trying to create the product with an invalid fiel', () => {
        before(async () => {
          const seller  = await chai
            .request(server)
            .post('/login')
            .send(validSeller);

          const { token } = seller.body;

          response = await chai
            .request(server)
            .post('/products')
            .set('Authorization', token)
            .send(invalidNewProduct);
        });

        it('1) - should return a status code of 400', () => {
          expect(response).to.have.status(400);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('"name" must be a string');
        });
      });
    });
  });

  describe('2) - Read all products', async () => {
    describe('1) - When Sucess', () => {
      before(async () => {
        response = await chai
          .request(server)
          .get('/products');
      });

      it('1) - should return a status code of 200', () => {
        expect(response).to.have.status(200);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('array');
      });

      it('3) - should return a object with all products', async () => {
        expect(response.body[0]).to.have.all.keys([
          "id",
          "name",
          "price",
          "urlImage",
        ]);
      });
    });
  });

  describe('3) - Update a product', async () => {
    describe('1) - When Sucess', () => {
      before(async () => {
        const seller  = await chai
          .request(server)
          .post('/login')
          .send(validSeller);

        const { token } = seller.body;

        response = await chai
          .request(server)
          .put('/products/12')
          .set('Authorization', token)
          .send(validUpdateProduct);
      });

      it('1) - should return a status code of 204', () => {
        expect(response).to.have.status(204);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should not return object with message', async () => {
        expect(response.body).to.not.have.property('error');
        expect(response.body).to.not.have.property('message');
        expect(response.body).to.not.have.property('token');
      });
    });

    describe('2) - When Fail', () => {
      describe('1) - When trying to update the product without the token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .put('/products/1')
            .send(validUpdateProduct);
        });

        it('1) - should return a status code of 401', () => {
          expect(response).to.have.status(401);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Token not found');
        });
      });

      describe('2 - When dont exist the product', () => {
        before(async () => {
          const seller  = await chai
            .request(server)
            .post('/login')
            .send(validSeller);

          const { token } = seller.body;

          response = await chai
            .request(server)
            .put('/products/100')
            .set('Authorization', token)
            .send(validUpdateProduct);
        });

        it('1) - should return a status code of 404', () => {
          expect(response).to.have.status(404);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Product not found');
        });
      });
    })
  });

  describe('4) - Delete a product', async () => {
    describe('1) - When Sucess', () => {
      before(async () => {
        const seller  = await chai
          .request(server)
          .post('/login')
          .send(validSeller);

        const { token } = seller.body;

        response = await chai
          .request(server)
          .delete('/products/12')
          .set('Authorization', token);
      });

      it('1) - should return a status code of 204', () => {
        expect(response).to.have.status(204);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should not return object with message', async () => {
        expect(response.body).to.not.have.property('error');
        expect(response.body).to.not.have.property('message');
        expect(response.body).to.not.have.property('token');
      });
    });

    describe('2) - When Fail', () => {
      describe('1) - When trying to update the product without the token', () => {
        before(async () => {
          response = await chai
            .request(server)
            .put('/products/1')
            .send(validUpdateProduct);
        });

        it('1) - should return a status code of 401', () => {
          expect(response).to.have.status(401);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Token not found');
        });
      });

      describe('2 - When dont exist the product', () => {
        before(async () => {
          const seller  = await chai
            .request(server)
            .post('/login')
            .send(validSeller);

          const { token } = seller.body;

          response = await chai
            .request(server)
            .delete('/products/100')
            .set('Authorization', token)
            .send(validUpdateProduct);
        });

        it('1) - should return a status code of 404', () => {
          expect(response).to.have.status(404);
        });

        it('2) - should return a object', async () => {
          expect(response.body).to.be.a('object');
        });

        it('3) - should return a object with a message', async () => {
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('Product not found');
        });
      });
    })
  });
});
