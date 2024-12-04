import { FaCaravan, FaShopify } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";

const About = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto grid grid-cols-2 md:grid-cols-4 items-center md:items-center">
      <div className="card">
        <div className="card-body">
          <div
            className="text-5xl
          "
          >
            <FaShopify />
          </div>
          <h2 className="card-title  font-rancho ">Click & Collect</h2>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-5xl">
            <FaCaravan />
          </div>
          <h2 className="card-title font-rancho ">Free Delivery</h2>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-5xl">
            <SiMaterialdesign />
          </div>
          <h2 className="card-title font-rancho ">3D Kit Designer</h2>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-5xl">
            <MdOutlinePayment />
          </div>
          <h2 className="card-title font-rancho ">Secure Payment</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
