import { useContext, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpUser, manageUserProfile, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    //validation
    if (name.length < 3) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your name more than 3 character!",
      });
    }
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please password must more than 6 character!",
      });
    }
    const digit = /(?=.*[0-9])/;
    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /(?=.*[a-z])/;
    const special = /(?=.*[\W_])/;

    if (!digit.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least digit!",
      });
    }
    if (!upperCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least upperCase!",
      });
    }
    if (!lowerCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least lowerCase!",
      });
    }
    if (!special.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least special character!",
      });
    }
    //sign up to fb
    signUpUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign up successfully", user);
        //update profile
        manageUserProfile(name, photo)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "sign up successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log("profile updated");
            form.reset();
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.errorMessage);
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please enter valid information",
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: (errorCode, errorMessage),
        });
      });
  };
  //google sign up
  const handleGoogleSignUp = () => {
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
        navigate("/login");
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
  const handleGithubSignUp = () => {
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
        navigate("/login");
      })
      .catch((error) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
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
          Please enter your details to sign up.
        </p>

        {/* Social login buttons */}
        <div className="flex justify-around mb-4">
          <button
            onClick={handleGithubSignUp}
            className="btn btn-outline btn-apple dark:bg-[#505050] dark:border dark:border-naBarBg dark:hover:bg-naBarBg"
          >
            <FaGithub className="text-black" />
          </button>
          <button
            onClick={handleGoogleSignUp}
            className="btn btn-outline btn-google dark:bg-[#505050] dark:border dark:border-naBarBg dark:hover:bg-naBarBg"
          >
            <FaGoogle className="text-red-500" />
          </button>
          <button className="btn btn-outline btn-twitter dark:bg-[#505050] dark:border dark:border-naBarBg dark:hover:bg-naBarBg">
            <FaTwitter className="text-blue-500" />
          </button>
        </div>
        <p className="text-center text-gray-500 mb-4">OR</p>

        {/* Login form */}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered w-full dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
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

          <button className="btn text-titleColor bg-none border-naBarBg w-full dark:bg-[#505050] dark:hover:bg-naBarBg dark:hover:text-white">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account yet?{" "}
          <Link to="/login" className="text-naBarBg font-semibold ">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
