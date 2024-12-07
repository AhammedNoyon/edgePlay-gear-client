import { useContext, useRef, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const { signInUser, googleSignIn, githubSignIn, forgetPass } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const email = useRef();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const checked = form.checkbox.value;
    // console.log(checked);
    console.log(email, password);
    //sign in to fb
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign in successfully", user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "sign in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state ? location.state : "/");
        // ...store to fb.....
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter valid information",
        });
      });
  };
  //google sign up
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result?.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "sign up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.errorMessage,
        });
      });
  };
  //github sign up
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result?.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "sign up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };
  //forget password
  const handleForgetPass = () => {
    const forgetEmail = email.current.value;
    // console.log(forgetEmail);
    if (!forgetEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email",
      });
    }
    forgetPass(forgetEmail)
      .then(() => {
        console.log("forget successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="flex items-center justify-center  bg-gray-100 p-4 dark:bg-black">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg my-10 dark:dark:bg-[#242424] dark:text-white">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center bg-nabBg text-white p-2 rounded-full">
            <span className="text-xl font-bold">⚽</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Welcome back
        </h2>
        <p className="text-center mb-4 text-gray-500">
          Please enter your details to sign in.
        </p>

        {/* Social login buttons */}
        <div className="flex justify-around mb-4">
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline btn-apple dark:bg-[#505050] dark:border dark:border-naBarBg dark:hover:bg-naBarBg"
          >
            <FaGithub className="text-black" />
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-google dark:bg-[#505050] dark:border dark:border-naBarBg dark:hover:bg-naBarBg"
          >
            <FaGoogle className="text-red-500 dark:bg-[#505050] dark:hover:bg-naBarBg" />
          </button>
          <button className="btn btn-outline btn-twitter dark:border dark:border-naBarBg dark:bg-[#505050] dark:hover:bg-naBarBg">
            <FaTwitter className="text-blue-500 " />
          </button>
        </div>
        <p className="text-center text-gray-500 mb-4">OR</p>

        {/* Login form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              ref={email}
              placeholder="Enter your email..."
              className="input input-bordered w-full dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              name="password"
              type={`${eye ? "text" : "password"}`}
              placeholder="Password"
              className="input input-bordered w-full dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
              required
            />
            <div
              onClick={() => setEye(!eye)}
              className="absolute top-4 right-4 text-xl"
            >
              {eye ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" name="checkbox" className="checkbox" />
              Remember me
            </label>
            <button onClick={handleForgetPass}>
              <Link className="text-naBarBg">Forgot password?</Link>
            </button>
          </div>
          <button className="btn text-titleColor bg-none border-naBarBg w-full dark:bg-[#505050] dark:hover:bg-naBarBg dark:hover:text-white">
            Sign in
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account yet?{" "}
          <Link to="/signup" className="text-naBarBg font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
