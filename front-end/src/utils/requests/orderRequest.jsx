import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class TokenUtils {
  orderRequest = async ({ userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    products,
    token }) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/sales`,
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: {
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        products
      }
    });

    return response;
  }
}

export default (new TokenUtils());
