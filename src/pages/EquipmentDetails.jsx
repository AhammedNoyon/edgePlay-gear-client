import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
  const equipments = useLoaderData();
  console.log(equipments);
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipments;
  return (
    <div className=" w-11/12 md:w-2/3 mx-auto">
      {/* coffee details  */}
      <div className="hero  my-20 mt-10 dark:text-white">
        <div className="hero-content flex-col lg:flex-row px-0">
          <img src={image} className="max-w-xs md:max-w-sm rounded-lg " />
          <div className="pr-4">
            <h1 className="text-5xl font-bold">{itemName}</h1>
            <p className="py-6">{description}</p>
            <p>Customization : {customization}</p>
            <div className="flex justify-between items-center mt-5">
              <p>Price : {price}</p>
              <p>Rating : {rating}</p>
            </div>
            <div className="border border-dashed my-2"></div>
            <div className="flex justify-between items-center">
              <p>Category : {categoryName}</p>
              <p>Stock : {stockStatus}</p>
            </div>
            <div className="border border-dashed my-2"></div>
            <div className="flex justify-between items-center">
              <p>Process : {processingTime}</p>
            </div>
            <div className="border border-dashed my-2"></div>

            <Link
              to="/"
              className="btn bg-naBarBg flex items-center text-xl mt-5 "
            >
              <span className="text-2xl dark:text-white">
                <IoIosArrowRoundBack />
              </span>
              <span className="dark:text-white">home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
