import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class OrderUtils {
  getOrdersById = async ({ auth, token }) => {
    const roleId = auth.role === 'customer' ? 'userId' : 'sellerId';
    const response = await AxiosHTTP.RequestWithToken({
      url: `${LOCAL}/sales/${auth.userId}?role=${roleId}`,
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

  createOrder = async ({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    products,
    token,
  }) => {
    const response = await AxiosHTTP.RequestWithToken({
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

export default (new OrderUtils());
