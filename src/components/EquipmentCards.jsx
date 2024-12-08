import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  useEffect(() => {
    fetch("https://latest-sports-equipment-zone.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipments(data);
      });
  }, []);

  return (
    <>
      {equipments.slice(0, 6).map((equipment) => (
        <div data-aos="zoom-in" key={equipment?._id} className="card  glass ">
          <div className="w-44 h-44 mx-auto">
            <img className="" src={equipment?.image} alt="equipment" />
          </div>
          <div className="card-body dark:text-white">
            <h2 className="card-title">{equipment?.itemName}</h2>
            <p>{equipment?.description.slice(1, 142)}...</p>
            <div className="flex justify-between items-center">
              <p>Price : {equipment?.price}</p>
              <p>Rating : {equipment?.rating}</p>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-naBarBg text-white font-bold text-lg mt-5">
                <Link to={`/equipmentDetails/${equipment?._id}`}>
                  View Details
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EquipmentCards;
