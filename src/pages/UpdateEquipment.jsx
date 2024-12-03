import { FaCheckCircle } from "react-icons/fa";

const UpdateEquipment = () => {
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
    console.log(
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus
    );
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 ">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Equipment
        </h2>
        {/* {success && (
          <div className="flex items-center bg-green-100 text-green-700 p-4 mb-6 rounded">
            <FaCheckCircle className="mr-2" /> Equipment added successfully!
          </div>
        )} */}
        <form
          onSubmit={handleUpdateEquipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Image */}
          <div className="form-control">
            <label className="label">Image</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered"
            />
          </div>

          {/* Item Name */}
          <div className="form-control">
            <label className="label">Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered"
            />
          </div>

          {/* Category Name */}
          <div className="form-control">
            <label className="label">Category Name</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Enter category name"
              className="input input-bordered"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered"
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating (1-5)"
              className="input input-bordered"
            />
          </div>

          {/* Customization */}
          <div className="form-control md:col-span-2">
            <label className="label">Customization</label>
            <textarea
              name="customization"
              placeholder="Enter customization details"
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="label">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered"
            />
          </div>

          {/* Stock Status */}
          <div className="form-control">
            <label className="label">Stock Status</label>
            <input
              type="text"
              name="stockStatus"
              placeholder="Enter stock quantity"
              className="input input-bordered"
            />
          </div>

          {/* User Email (Read-only) */}
          <div className="form-control">
            <label className="label">User Email</label>
            <input
              type="text"
              name="userEmail"
              readOnly
              className="input input-bordered bg-gray-200"
            />
          </div>

          {/* User Name (Read-only) */}
          <div className="form-control">
            <label className="label">User Name</label>
            <input
              type="text"
              name="userName"
              readOnly
              className="input input-bordered bg-gray-200"
            />
          </div>

          <button
            type="submit"
            className="btn border border-titleColor text-titleColor md:col-span-2"
          >
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
