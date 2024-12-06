import { useContext, useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const MyEquipment = () => {
  const { users } = useContext(AuthContext);
  console.log(users);
  const [myEquipments, setMyEquipments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/equipments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const equipments = data.filter((d) => d?.userEmail === users?.email);
        setMyEquipments(equipments);
      });
  }, [users]);
  console.log(myEquipments);
  return (
    <div className="w-11/12 md:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 md:my-20">
      {myEquipments?.map((myEquipment) => (
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
                    <Link>
                      <button className="h-10 w-10 bg-neutral  flex justify-center items-center mx-auto text-white">
                        <MdEdit />
                      </button>
                    </Link>
                    <Link>
                      <button className="h-10 w-10 bg-red-500 flex justify-center items-center mx-auto text-white">
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
      ))}
    </div>
  );
};

export default MyEquipment;
