import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL: baseUrl,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.message);

    return Promise.reject(error);
  }
);
