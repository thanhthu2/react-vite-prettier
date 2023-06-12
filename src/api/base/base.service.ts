import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// create an axios instance
const axiosIntance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: import.meta.env.VITE_REQUEST_TIMEOUT
});

axiosIntance.interceptors.request.use(
  config => {
    const handleConfig = { ...config };
    const token = localStorage.getItem("token");
    if (handleConfig.headers) {
      handleConfig.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIntance.interceptors.response.use(
  (respone) => (respone.data),
  (error) => handleError(error)
);

const handleError = async (error: AxiosError) => {
  return Promise.reject(error.message)
};

export function transformRequest<T>(config: AxiosResponse<T>) {
  return axiosIntance.request(config).then(
    (val: AxiosResponse<T>) => [null, val || val] as unknown as [null, T],
    (err: AxiosError) => [err, null] as [AxiosError, null]
  );
}

export { axiosIntance };
