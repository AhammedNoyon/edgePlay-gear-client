import { useContext, useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { FaArrowRight, FaEdit, FaRegEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const MyEquipment = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();
  const { users } = useContext(AuthContext);
  const [myEquipments, setMyEquipments] = useState(
    loadedData.filter((d) => d?.userEmail === users?.email)
  );
  // //update
  // const handleUpdate = (id) => {
  //   console.log("update is clicked");
  //   console.log(id);
  //   navigate("/updateEquipment", { state: { id } });
  // };
  //delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://latest-sports-equipment-zone.vercel.app/equipments/${_id}`,
          {
            method: "Delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (result.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Equipment has been deleted.",
                icon: "success",
              });
            }
            const remaining = myEquipments.filter(
              (myEquipment) => myEquipment._id !== _id
            );
            setMyEquipments(remaining);
          });
      }
    });
  };
  return (
    <div className="w-11/12 md:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 md:my-20 dark:text-white ">
      {/* <Link
                to="/"
                className="btn bg-naBarBg flex items-center text-xl mt-5 "
              >
                <span className="text-2xl">
                  <IoIosArrowRoundBack />
                </span>
                <span>home</span>
              </Link> */}
      {/* image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName, */}

      {myEquipments.length > 0 ? (
        myEquipments.map((myEquipment) => (
          <Fade direction="left" key={myEquipment?._id}>
            <div className="group relative  mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 dark:bg-[#505050] ">
              {/* Image Section */}
              <div className="relative overflow-hidden ">
                <img
                  src={myEquipment?.image}
                  alt="Card"
                  className="w-80 h-80 mx-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {myEquipment?.categoryName}..!
                  </p>
                </div>
              </div>
              {/* Content Section */}
              <div className="p-5 md:h-[355px] lg:h-[300px] flex flex-col ">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-active transition-colors duration-300 dark:text-white">
                  {myEquipment?.itemName}
                </h2>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
                  {myEquipment?.description.slice(0, 200)}...
                </p>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
                  {myEquipment?.customization.slice(0, 200)}...
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-2 dark:text-white">
                  <p>Price : {myEquipment?.price}</p>
                  <p>Rating : {myEquipment?.rating}</p>
                </div>
                <div className="border my-1 border-dashed"></div>
                <div className="text-sm flex justify-between text-gray-500 dark:text-white">
                  <p>Category : {myEquipment?.categoryName}</p>
                  <p>Stock: {myEquipment?.stockStatus}</p>
                </div>
                <div className="border my-2 border-dashed"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pr-5 md:-mt-5 lg:mt-10">
                <button className="mb-3 ml-3 flex justify-center items-center  gap-2 px-4 py-2   rounded-full shadow-md  transition-all duration-300 bg-naBarBg text-white">
                  <Link to={`/equipmentDetails/${myEquipment?._id}`}>
                    Learn More
                  </Link>{" "}
                  <FaArrowRight />
                </button>
                <button className="mb-3 ml-3 flex justify-center items-center gap-2 px-4 py-2 bg-naBarBg text-white  rounded-full shadow-md  transition-all duration-300">
                  <Link to={`/updateEquipment/${myEquipment?._id}`}>
                    Update
                  </Link>{" "}
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(myEquipment?._id)}
                  className="mb-3 ml-3 flex justify-center items-center gap-2 px-4 py-2 bg-error text-white rounded-full shadow-md  transition-all duration-300"
                >
                  Delete
                  <FaDeleteLeft />
                </button>
              </div>
            </div>
          </Fade>
        ))
      ) : (
        <div className="text-center h-[260px] ">
          <h3 className="text-3xl font-bold">No Equipments Found</h3>
        </div>
      )}
    </div>
  );
};

export default MyEquipment;
