import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://b8a11-server-side-wapborhan.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(logOut);

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("logout");
        logOut()
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
