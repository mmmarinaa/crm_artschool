import axios from "axios";

const API_URL = "http://localhost:5000";

const $host = axios.create({
  baseURL: API_URL,
});

const $authHost = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $authHost, $host };
