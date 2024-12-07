import { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { users } = useContext(AuthContext);
  const handleAddEquipment = (event) => {
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
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const addEquipmentInfo = {
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
    };
    console.log(addEquipmentInfo);
    fetch("https://latest-sports-equipment-zone.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addEquipmentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Equipment add successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 dark:bg-black dark:text-white">
      <div className="w-full max-w-3xl bg-white dark:bg-[#242424] dark:text-white shadow-lg rounded-lg p-8 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Add Equipment</h2>
        <form
          onSubmit={handleAddEquipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
        >
          {/* Image */}
          <div className="form-control">
            <label className="label">Image</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
              required
            />
          </div>

          {/* Item Name */}
          <div className="form-control">
            <label className="label">Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Category Name */}
          <div className="form-control">
            <label className="label">Category Name</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Enter category name"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating (1-5)"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="label">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg "
            />
          </div>

          {/* Stock Status */}
          <div className="form-control">
            <label className="label">Stock Status</label>
            <input
              type="text"
              name="stockStatus"
              placeholder="Enter stock quantity"
              className="input input-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            />
          </div>
          {/* Customization */}
          <div className="form-control">
            <label className="label">Customization</label>
            <textarea
              name="customization"
              placeholder="Enter customization details"
              className=" rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
            ></textarea>
          </div>
          {/* User Email (Read-only) */}
          <div className="form-control">
            <label className="label">User Email</label>
            <input
              value={`${users ? users?.email : ""}`}
              type="text"
              name="userEmail"
              readOnly
              className="input input-bordered bg-gray-200 dark:bg-[#505050]"
            />
          </div>

          {/* User Name (Read-only) */}
          <div className="form-control">
            <label className="label">User Name</label>
            <input
              value={`${users ? users?.displayName : ""}`}
              type="text"
              name="userName"
              readOnly
              className="input input-bordered bg-gray-200 dark:bg-[#505050]"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered dark:bg-[#505050] focus:border-2 focus:border-naBarBg"
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

export default AddEquipment;
