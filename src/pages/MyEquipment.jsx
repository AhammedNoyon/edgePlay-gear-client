import { useContext, useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

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
        fetch(`http://localhost:5000/equipments/${_id}`, {
          method: "Delete",
        })
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
    <div className="w-11/12 md:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 md:my-20">
      {myEquipments.length > 0 ? (
        myEquipments.map((myEquipment) => (
          <div
            key={myEquipment?._id}
            className="card w-full  shadow-lg px-6 py-6"
          >
            <div className=" justify-between gap-5 px-0 ">
              <img
                src={myEquipment?.image}
                className="max-w-full md:w-36 h-36 mx-auto rounded-lg "
              />
              <div className="mt-10">
                <div className="flex justify-between items-center">
                  <h1 className=" text-2xl md:text-5xl font-bold">
                    {myEquipment?.itemName}
                  </h1>
                  <div>
                    <div className="flex flex-col text-3xl space-y-5 ">
                      {/* <Link to={`/coffeeDetails/${_id}`}>
          <button className="h-10 w-10 bg-bannerBtn flex justify-center items-center mx-auto text-white">
            <FaRegEye />
          </button>
        </Link> */}
                      <Link to={`/updateEquipment/${myEquipment?._id}`}>
                        <button className="h-10 w-10 bg-neutral  flex justify-center items-center mx-auto text-white">
                          <MdEdit />
                        </button>
                      </Link>
                      <Link>
                        <button
                          onClick={() => handleDelete(myEquipment?._id)}
                          className="h-10 w-10 bg-red-500 flex justify-center items-center mx-auto text-white"
                        >
                          <MdDeleteOutline />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="py-6">{myEquipment?.description}</p>
                <p>Customization : {myEquipment?.customization}</p>
                <div className="flex justify-between items-center mt-5">
                  <p>Price : {myEquipment?.price}</p>
                  <p>Rating : {myEquipment?.rating}</p>
                </div>
                <div className="border border-dashed my-2"></div>
                <div className="flex justify-between items-center">
                  <p>Category : {myEquipment?.categoryName}</p>
                  <p>Stock : {myEquipment?.stockStatus}</p>
                </div>
                <div className="border border-dashed my-2"></div>
                <div className="flex justify-between items-center">
                  <p>Process : {myEquipment?.processingTime}</p>
                </div>
                <div className="border border-dashed my-2"></div>

                {/* <Link
                to="/"
                className="btn bg-naBarBg flex items-center text-xl mt-5 "
              >
                <span className="text-2xl">
                  <IoIosArrowRoundBack />
                </span>
                <span>home</span>
              </Link> */}
              </div>
            </div>
          </div>
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
