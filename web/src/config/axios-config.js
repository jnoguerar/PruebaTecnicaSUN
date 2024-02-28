import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 60000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    //Para cuando se desea modificar el contenido de la respuesta
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
