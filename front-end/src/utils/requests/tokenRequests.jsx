import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class TokenUtils {
    getToken = async ({ email, password }) => {
      const response = await AxiosHTTP.Request({
        url: `${LOCAL}/login`,
        method: 'POST',
        email,
        password,
      });

      return response;
    }
}

export default (new TokenUtils());
