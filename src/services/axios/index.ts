import axios, { AxiosRequestConfig } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  timeout: 10000
};

const axiosInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`
});

export default axiosInstance;
