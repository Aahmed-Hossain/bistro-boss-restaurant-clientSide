/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();
  
  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner text-warning min-h-screen text-center flex justify-center items-center font-extrabold"></span>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default AdminRoutes;