import AxiosHTTP from './axios';

const md5 = require('md5');

const LOCAL = 'http://localhost:3001';

class TokenUtils {
  registerUser = async ({ name, email, password, role = 'customer' }) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/register`,
      method: 'POST',
      body: {
        name,
        email,
        role,
        password: md5(password),
      },
    });

    return response;
  }
}

export default (new TokenUtils());
