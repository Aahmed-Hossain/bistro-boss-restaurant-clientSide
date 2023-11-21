/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner text-warning min-h-screen text-center flex justify-center items-center font-extrabold"></span>;
  }
  return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
