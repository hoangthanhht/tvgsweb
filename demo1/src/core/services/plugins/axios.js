import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://vue.gxd.vn/api/',
    headers: {'Content-Type': 'application/json'}
  });

  export default axiosInstance;