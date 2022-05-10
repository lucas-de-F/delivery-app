import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class OrdersUtils {
  ordersRequest = async ({ id, token }) => {
    const response = await AxiosHTTP.RequestWithToken({
      url: `${LOCAL}/sales/${id}`,
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
    return response;
  }
}

export default (new OrdersUtils());
