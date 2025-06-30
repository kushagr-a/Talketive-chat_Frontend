import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development"
    ? "https://talketive-chatbackend-production.up.railway.app/api"
    : "/api"),
  withCredentials: true,
});
