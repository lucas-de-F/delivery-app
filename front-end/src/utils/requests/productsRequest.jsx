import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class TokenUtils {
  productsRequest = async ({ token }) => {
    const response = await AxiosHTTP.RequestWithToken({
      url: `${LOCAL}/products`,
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
    console.log(response);
    return response;
  }
}

export default (new TokenUtils());
