import axios from "axios";
import toast from "react-hot-toast";
import { localStorageKeys } from "../constants/localStorageKeys";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL: baseUrl,
});

axiosClient.interceptors.request.use((config) => {
  const skipClientContext =
    "skipClientContext" in config ? config.skipClientContext : false;

  if (!skipClientContext) {
    config.headers = config.headers || {};
    config.headers["Client-Id"] = localStorage.getItem(
      localStorageKeys.previouslySelectedClientId
    );
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.message);

    return Promise.reject(error);
  }
);
