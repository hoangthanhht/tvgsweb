import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {'accept': 'application/json'}
  });

  export default axiosInstance;