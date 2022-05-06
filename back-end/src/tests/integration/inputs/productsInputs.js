const validSeller = {
  email: 'fulana@deliveryapp.com',
  password: 'fulana@123',
}

const newProduct = {
  "name": "Capirinha",
  "price": 10,
  "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
};

const invalidNewProduct = {
  "name": 1111111,
  "price": 10,
  "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
};

const validUpdateProduct = {
  "name": "Capirinha",
  "price": 10,
  "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
};

module.exports = { 
  validSeller,
  newProduct,
  invalidNewProduct,
  validUpdateProduct,
};
