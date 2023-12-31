import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from './useAxios';

const useAdmin = () => {
    const {user, loading } = useAuth();
    const axiosHook = useAxios();
    const {data: isAdmin ,isPending:isAdminLoading} = useQuery({
        queryKey: [user?.email , "isAdmin"],
        enabled: !loading,   //  that means  
        queryFn: async()=> {
            const res = await axiosHook.get(`/users/admin/${user?.email}`);
            // console.log("admin ", res.data);
            return res?.data?.admin;
        }
    })
    console.log( 'use  admin',isAdmin);
    return [isAdmin,isAdminLoading]
};

export default useAdmin;