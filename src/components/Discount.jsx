import discount1 from "../assets/discount1.png";
import discount2 from "../assets/discount2.png";
const Discount = () => {
  return (
    <div>
      <div className="text-center mb-10 w-11/12 md:w-full mx-auto">
        <h3 className="text-3xl font-bold">
          Gear Up For Less - Kids and Basketball
        </h3>
        <p>Gear up for less - 30% off Kids</p>
        <p>Black Friday Deals Are Still On For Basketball - Dont's Miss Out</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div>
          <img className="w-full" src={discount1} alt="" />
        </div>
        <div>
          <img className="w-full" src={discount2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
