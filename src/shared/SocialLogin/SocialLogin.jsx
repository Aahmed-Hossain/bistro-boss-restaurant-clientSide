
import Swal from "sweetalert2";
import googleImg from "../../assets/others/google.png";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SocialLogin = () => {
    const navigate = useNavigate();
    const {googleSignIn } = useAuth();
const publicAxios = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleSignIn().then(res => {
          const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName
          }
          publicAxios.post('/users', userInfo).then(res=>console.log(res))
          Swal.fire("WoW", "user Logged in", "success");
          navigate("/");
        })
      }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="rounded-full px-3 py-2 border border-[#d97706] flex justify-around items-center mb-2 w-full">
              <img className="h-[1rem] w-[1rem]" src={googleImg} alt="" />
              <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;