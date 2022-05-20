import md5 from 'md5';
import AxiosHTTP from './axios';

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
