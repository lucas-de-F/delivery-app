import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class OrderIdUtils {
  getOrdersById = async ({ auth, token }) => {
    console.log('REQUISIÇÂO', { auth, token }, 'REQUISIÇÂO');
    const response = await AxiosHTTP.RequestWithToken({
      url: `${LOCAL}/sales/${auth.userId}`,
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
    return response;
  }

  // getOrders = async ({ token }) => {
  //   const response = await AxiosHTTP.Request({
  //     url: `${LOCAL}/sales`,
  //     method: 'GET',
  //     headers: {
  //       authorization: token,
  //     },
  //   });

  //   return response;
  // }

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
        products,
      },
    });

    return response;
  }
}

export default (new OrderIdUtils());
