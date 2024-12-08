import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "../index.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const { users, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(users);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allEquipment">All Equipment</NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink to="/addEquipment">Add Equipment </NavLink>
          </li>
          <li>
            <NavLink to="/myEquipment">My Equipment List</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.errorMessage);
      });
  };
  return (
    <div className="">
      <div className="py-3 hidden lg:block  bg-[#00bfa6a4]">
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
      <div className="navbar p-0 w-11/12 md:w-8/12 mx-auto mb-10 lg:my-10 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost dark:text-white lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow dark:bg-black dark:text-white"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center ">
            <div className="h-14 w-14 -ml-2 md:ml-0">
              <img src={logo} alt="" className=" w-full dark:rounded-full" />
            </div>
            <h3 className="text-xl lg:text-5xl font-bold text-[#00BFA6] hidden md:block">
              EdgePlay
            </h3>
            <h3 className="text-xl font-bold dark:text-white text-naBarBg">
              Gear
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:text-white ">{link}</ul>
        </div>
        <div className="navbar-end relative">
          {users ? (
            <div className="flex items-center gap-2 dark:text-white relative">
              <div className=" rounded-full border p-2">
                <img
                  className="w-14 h-14 rounded-full object-cover items-center"
                  src={users?.photoURL}
                  alt=""
                  title={users?.displayName}
                />
              </div>
              <div className="">
                <button
                  className="border-2 border-naBarBg font-bold text-naBarBg px-2 py-2 mt-1 rounded-lg"
                  onClick={handleLogout}
                >
                  <Link>Logout</Link>
                </button>
              </div>
            </div>
          ) : (
            <div className="dark:text-white">
              <Link to="/login">Login / </Link>
              <Link to="/signUp"> Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
