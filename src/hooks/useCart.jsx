import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosHook } from './useAxios';

const useCart = () => {
    const { user } = useAuth();
    console.log("User Email:", user?.email); // Add this line to check the user's email
    const { refetch, data: cart = [] } = useQuery({
      queryKey: ["cart", user?.email],
      queryFn: async () => {
        const res = await axiosHook.get(`/carts?email=${user?.email}`);
        console.log("API Response:", res.data); // Logging API response
        return res?.data;
      },
    });
  
    return [cart, refetch];
};

export default useCart;






