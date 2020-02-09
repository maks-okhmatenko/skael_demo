import axios from 'axios';
import * as APP_CONSTANTS from '../containers/App/constants';

const client = axios.create({
  baseURL: APP_CONSTANTS.API_URL,
});

/* eslint-disable */
const request = options => {

  const onSuccess = response => {
    console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

/* eslint-enable */

export default request;
