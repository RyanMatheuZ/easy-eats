import axios, { AxiosRequestConfig } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  timeout: 10000,
  headers: {
    Accept: 'application/json;charset=UTF-8', 'Content-Type': 'application/json',
  }
};

const axiosInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
});

export default axiosInstance;
