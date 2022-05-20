import md5 from 'md5';
import AxiosHTTP from './axios';

const LOCAL = 'http://localhost:3001';

class TokenUtils {
  getToken = async ({ email, password }) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/login`,
      method: 'POST',
      body: {
        email,
        password: md5(password),
      },
    });

    return response;
  }
}

export default (new TokenUtils());
