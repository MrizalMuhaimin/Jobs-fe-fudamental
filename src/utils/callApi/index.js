import axios from 'axios';
const makeCallApi = ({
    url = '', method = 'GET', params = {}, data = {}, headers = {}, responseType = null, timeout = 20000,
  }) => {
    const callApi = axios.create({
      baseURL: process.env.APP_API_URL,
      timeout
    });
    
    callApi.interceptors.request.use((config) => {
      config.headers = {
        'Content-Type': 'application/json',
        ...config.headers,
        ...headers
      };
      return config;
    }, function (error) {  
      return Promise.reject(error);
    });
  
    return callApi({
      url,
      method,
      params,
      data,
      responseType
    });
  };
  
  export { makeCallApi };