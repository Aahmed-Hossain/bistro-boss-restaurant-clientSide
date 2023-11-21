import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const authHook = useContext(AuthContext);
    return authHook
};

export default useAuth;