/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import githubImg from "../../assets/others/github.png";
import googleImg from "../../assets/others/google.png";
import img from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef();
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const { googleLogin, githubLogin } = "useAuth();";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // logIn(email, password)
    //   .then((res) => {
    //     console.log(res);
    //     swal("WoW!", "User logged in successfully!", "success");
    //     navigate(location?.state ? location.state : "/");
    //   })
    //   .catch((err) => {
    //     swal("opps!", err.message, "error");
    //   });
    form.reset()
  };
  //   social login
  //   const hadleSocialLogin = (media) => {
  //     media()
  //       .then((res) => {
  //         console.log(res);
  //         navigate(location?.state ? location.state : "/")
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
    else{
        setDisable(true)
    }
  };

  return (
    <div className="hero max-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12 ">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border border-[#d97706] rounded-none">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-[#d97706]">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className=" border-b border-[#d97706] w-full py-3 px-3 focus:outline-none bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border-b border-[#d97706] w-full py-3 px-3 focus:outline-none bg-transparent"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control flex items-center">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <div className="relative">
                  <input
                    type="text"
                    ref={captchaRef}
                    name="capcha"
                    placeholder="Type capcha"
                    className="border-b border-[#d97706] w-full py-3 px-3 focus:outline-none bg-transparent"
                  />
                  <button
                    className="absolute right-0 top-2 bottom-0 px-2 rounded-md btn btn-sm bg-[#d97706] text-white"
                    onClick={handleValidateCaptcha}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className={`hover:bg-[#d97706] bg-[#ef8307] text-white font-bold py-2 px-4 w-full ${
                    disable ? "bg-opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  value="Login"
                  disabled={disable}
                />
              </div>
            </form>
            <p className="divider">OR</p>
            <button
              //   onClick={() => hadleSocialLogin(googleLogin)}
              className="rounded-full px-3 py-2 border border-[#d97706] flex justify-around items-center mb-2 w-full"
            >
              {" "}
              <img className="h-[1rem] w-[1rem]" src={googleImg} alt="" />
              <span>Continue with Google</span>
            </button>
            <button
              //   onClick={() => hadleSocialLogin(githubLogin)}
              className="rounded-full px-3 py-2 border border-[#d97706] flex justify-around items-center mb-2 w-full"
            >
              {" "}
              <img className="h-[1.5rem] w-[1.5rem]" src={githubImg} alt="" />
              <span>Continue with Github</span>
            </button>
            <p className="my-4 text-center">
              New to Fire Up Restaurant{" "}
              <Link
                className="text-yellow-600 font-bold link-hover "
                to="/register"
              >
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
