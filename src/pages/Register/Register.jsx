import img from "../../assets/others/authentication2.png";
import googleImg from "../../assets/others/google.png";
import githubImg from "../../assets/others/github.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Register = () => {
  const navigate = useNavigate()
  const { createUser,updateUser } = useAuth();
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.img).then((result) => {
      console.log(result.user);
      updateUser(data.name, data.img)
      .then(()=>{
        console.log("user updated");
        reset();
        Swal.fire('WoW', "user updated", "success")
        navigate('/')
      })
      .then(err => console.log(err))
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border border-[#d97706] rounded-none">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-[#d97706]">
              Sign Up Now
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  className="border-b border-[#d97706] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <span className="text-red-700 font-xm">
                    *Name is required*
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL
                </label>
                <input
                  className="border-b border-[#d97706] bg-transparent w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  id="img"
                  {...register("img")}
                  name="img"
                  placeholder="Enter your image url"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="border-b border-[#d97706] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="border-b border-[#d97706] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                  })}
                />
                {errors.exampleRequired && (
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-700 font-xm">
                    *Password is required*
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 font-xm">
                    *Password is must be 8 at least characters*
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700 font-xm">
                    *Password is must be 20 in characters*
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 font-xm">
                    *Password must have at least one upper case, one lower case,
                    one digit and special character*
                  </span>
                )}
              </div>
              <button
                className="hover:bg-[#d97706] bg-[#e98008] font-semibold py-2 px-4 w-full text-white"
                type="submit"
              >
                Register
              </button>
            </form>
            <p className="divider">OR</p>
            <button className="rounded-full px-3 py-2 border border-[#d97706] flex justify-around items-center mb-2 w-full">
              {" "}
              <img className="h-[1rem] w-[1rem]" src={googleImg} alt="" />
              <span>Continue with Google</span>
            </button>
            <button className="rounded-full px-3 py-2 border border-[#d97706] flex justify-around items-center mb-2 w-full">
              {" "}
              <img className="h-[1.5rem] w-[1.5rem]" src={githubImg} alt="" />
              <span>Continue with Github</span>
            </button>
            <p className="my-2">
              Already have an account?
              <Link
                to={"/login"}
                className="text-[#d97706] font-bold hover:underline"
              >
                {" "}
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     const name = form.get("name");
//     const img = form.get("img");
//     const email = form.get("email");
//     const password = form.get("password");
//     console.log(name, img, email, email, password);

// if (password.length < 6) {
//   swal("Oops", "Password must be at least 6 characters", "warning");
//   return;
// } else if (!/(?=.*[A-Z])(?=.*[@$!%*?&])/.test(password)) {
//   swal(
//     "Oops",
//     "Password must contain at least one uppercase letter and one special character",
//     "warning"
//   );
//   return;
// }
// createUser(email, password)
//   .then((res) => {
//     console.log(res);
//     handleUpdateProfile(name, img);
//     swal("WoW!", "User created successfully!", "success");
//     navigate(location?.state ? location.state : "/");
//   })
//   .catch((err) => {
//     swal("Oops!", err.message, "error");
//   });
//   };
// social login
//   const hadleSocialLogin = (media) => {
//     media()
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
