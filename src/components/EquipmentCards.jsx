import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/equipments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipments(data);
      });
  }, []);
  return (
    <>
      {equipments.map((equipment) => (
        <div
          key={equipment._id}
          className="card card-side bg-base-100 shadow-xl"
        >
          <div className="w-44 h-44">
            <img src={equipment?.image} alt="equipment" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{equipment?.itemName}</h2>
            <p>{equipment?.description.slice(1, 100)}...</p>
            <div className="flex justify-between items-center">
              <p>Price : {equipment?.price}</p>
              <p>Rating : {equipment?.rating}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-naBarBg text-white font-bold text-lg">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EquipmentCards;
