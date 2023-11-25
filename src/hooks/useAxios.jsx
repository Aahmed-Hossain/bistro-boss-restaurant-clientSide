import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosHook = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  // TODO: NOT FOUND TOKEN NOT FOUND
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosHook.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accessToken");
      // console.log("from interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosHook.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("interceptor status", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosHook;
};
export default useAxios;


