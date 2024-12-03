import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex items-center justify-center  bg-gray-100 p-4 ">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg my-10">
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
          <button className="btn btn-outline btn-apple">
            <FaGithub className="text-black" />
          </button>
          <button className="btn btn-outline btn-google">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="btn btn-outline btn-twitter">
            <FaTwitter className="text-blue-500" />
          </button>
        </div>
        <p className="text-center text-gray-500 mb-4">OR</p>

        {/* Login form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-naBarBg">
              Forgot password?
            </Link>
          </div>
          <button className="btn text-titleColor bg-none border-naBarBg w-full">
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
