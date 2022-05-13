
const validSale = {
	"userId": 3,
	"sellerId": 2,
	"totalPrice": 5.99,
	"deliveryAddress": "123 Main St",
	"deliveryNumber": "123-456-7890",
	"saleDate": "2019-01-01",
	"products": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ]
};

invalidSaleBody = {
  "userId": 3,
  "sellerId": 2,
  "totalPrice": 5.99,
  "deliveryAddress": 555555,
  "deliveryNumber": "123-456-7890",
  "saleDate": "2019-01-01",
  "products": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    },
  ]
};

module.exports = { validSale, invalidSaleBody};
