import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const loadedData = useLoaderData();
  const [equipments, setEquipments] = useState(loadedData);
  // console.log(equipments);
  // const {
  //   image,
  //   itemName,
  //   categoryName,
  //   description,
  //   price,
  //   rating,
  //   customization,
  //   processingTime,
  //   stockStatus,
  // } = equipments;
  const handleSortByPrice = () => {
    console.log("sort button is clicked");
    const sortByPrice = equipments.sort((a, b) => a.price - b.price);
    setEquipments(sortByPrice);
  };
  return (
    <div className=" w-11/12 md:w-2/3 mx-auto mb-20">
      <div className="flex justify-between items-center mt-20 mb-10">
        <h3 className="text-xl md:text-3xl font-bold">All Equipments</h3>
        <button
          onClick={handleSortByPrice}
          className="btn bg-naBarBg text-white font-bold text-lg"
        >
          Sort By Price
        </button>
      </div>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image & Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row * */}
            {equipments.map((equipment) => (
              <tr key={equipment?._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={equipment?.image} alt="sports equipment" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{equipment?.itemName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{equipment?.price}</span>
                </td>
                <td>{equipment?.rating}</td>
                <td>{equipment?.stockStatus}</td>
                <th>
                  <Link
                    to={`/equipmentDetails/${equipment._id}`}
                    className="btn btn-ghost btn-xl hover:bg-naBarBg"
                  >
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
