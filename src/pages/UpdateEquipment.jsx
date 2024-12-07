import { FaCheckCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const loadUpdateData = useLoaderData();
  const {
    _id,
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
  } = loadUpdateData || {};
  console.log(loadUpdateData);
  const handleUpdateEquipment = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const updateEquipmentInfo = {
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    fetch(`https://latest-sports-equipment-zone.vercel.app/equipments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEquipmentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Equipment update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex flex-col items-center p-6 ">
      <div className="w-full max-w-3xl bg-white  shadow-lg rounded-lg p-8 my-10 dark:bg-[#242424] dark:text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Equipment
        </h2>
        <form
          onSubmit={handleUpdateEquipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Image */}
          <div className="form-control">
            <label className="label">Image</label>
            <input
              defaultValue={image}
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Item Name */}
          <div className="form-control">
            <label className="label">Item Name</label>
            <input
              defaultValue={itemName}
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Category Name */}
          <div className="form-control">
            <label className="label">Category Name</label>
            <input
              defaultValue={categoryName}
              type="text"
              name="categoryName"
              placeholder="Enter category name"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">Price</label>
            <input
              defaultValue={price}
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">Rating</label>
            <input
              defaultValue={rating}
              type="number"
              name="rating"
              placeholder="Enter rating (1-5)"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="label">Processing Time</label>
            <input
              defaultValue={processingTime}
              type="text"
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Stock Status */}
          <div className="form-control">
            <label className="label">Stock Status</label>
            <input
              defaultValue={stockStatus}
              type="text"
              name="stockStatus"
              placeholder="Enter stock quantity"
              className="input input-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Customization */}
          <div className="form-control">
            <label className="label">Customization</label>
            <textarea
              defaultValue={customization}
              name="customization"
              placeholder="Enter customization details"
              className=" rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            ></textarea>
          </div>

          {/* User Email (Read-only) */}
          <div className="form-control">
            <label className="label">User Email</label>
            <input
              defaultValue={userEmail}
              type="text"
              name="userEmail"
              readOnly
              className="input input-bordered bg-gray-200  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* User Name (Read-only) */}
          <div className="form-control">
            <label className="label">User Name</label>
            <input
              defaultValue={userName}
              type="text"
              name="userName"
              readOnly
              className="input input-bordered bg-gray-200  dark:bg-[#505050] focus:border-2 focus:border-naBarBg "
            />
          </div>
          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label">Description</label>
            <textarea
              defaultValue={description}
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered  dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn border border-titleColor text-titleColor md:col-span-2 dark:bg-[#505050] dark:hover:bg-naBarBg dark:hover:text-white"
          >
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
