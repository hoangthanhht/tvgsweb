import axios from 'axios';
const axiosInstance = axios.create({
    //baseURL: 'http://vue.gxd.vn/api/',
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {'Content-Type': 'application/json'}
  });

  export default axiosInstance;