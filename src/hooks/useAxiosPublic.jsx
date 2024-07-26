import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  return axiosPublic;
};

export default useAxiosPublic;
