import axios from 'axios';

class AxiosHTTP {
  Request = async (data) => {
    let axiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  RequestWithToken = async (data) => {
    let axiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        headers: {
          authorization: data.headers.authorization,
        },
        data: data.body,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export default (new AxiosHTTP());
