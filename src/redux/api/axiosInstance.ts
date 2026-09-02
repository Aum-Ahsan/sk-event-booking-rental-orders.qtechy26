import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15_000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
