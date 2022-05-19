import AxiosHTTP from './axios';

const md5 = require('md5');

const LOCAL = 'http://localhost:3001';

class TokenUtils {
  registerUser = async ({ name, email, password }) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/register`,
      method: 'POST',
      body: {
        name,
        email,
        password: md5(password),
      },
    });

    return response;
  }
}

export default (new TokenUtils());
