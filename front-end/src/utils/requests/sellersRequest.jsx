import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class SellerUtils {
  getSellersRequest = async ({ token }) => {
    const response = await AxiosHTTP.RequestWithToken({
      url: `${LOCAL}/sellers`,
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
    return response;
  }
}

export default (new SellerUtils());
