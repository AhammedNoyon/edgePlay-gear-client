import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const link = (
    <>
      <li>
        <a to="">All Equipment</a>
      </li>
      <li>
        <a to="">Add Equipment </a>
      </li>
      <li>
        <a to="">Equipment List</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="py-3  bg-[#00bfa6a4]">
        <div className="flex justify-between w-11/12 md:w-8/12 mx-auto">
          <div className="text-center font-semibold">
            <h3 className=" text-xl text-white">Welcome to EdgePlay Gear</h3>
          </div>
          <div className="text-center font-semibold">
            <h3 className="text-xl text-white">
              Champion's Choice: Gear for Greatness
            </h3>
          </div>
        </div>
      </div>
      <div className="navbar p-0 w-11/12 md:w-8/12 mx-auto my-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center ">
            <div className="h-14 w-14">
              <img src={logo} alt="" className=" w-full" />
            </div>
            <h3 className="text-5xl font-bold text-[#00BFA6]">EdgePlay </h3>
            <h3 className="text-xl font-bold">Gear</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link>Login / </Link>
          <Link> Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
