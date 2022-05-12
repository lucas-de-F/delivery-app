import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class SellerUtils {
    sellersRequest = async ({ token }) => {
      const response = await AxiosHTTP.RequestWithToken({
        url: `${LOCAL}/sellers`,
        method: 'GET',
        headers: {
          authorization: token,
        },
      });
      // console.log(response);
      return response;
    }
}

export default (new SellerUtils());
