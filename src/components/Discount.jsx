import { Fade } from "react-awesome-reveal";
import discount1 from "../assets/discount1.png";
import discount2 from "../assets/discount2.png";
const Discount = () => {
  return (
    <div>
      <div className="text-center mb-10 w-11/12 md:w-full mx-auto">
        <Fade cascade direction="down">
          <h3 className="text-3xl font-bold dark:text-white">
            Gear Up For Less - Kids and Basketball
          </h3>
        </Fade>
        <Fade cascade direction="up">
          <p className="dark:text-white">Gear up for less - 30% off Kids</p>
          <p className="dark:text-white">
            Black Friday Deals Are Still On For Basketball - Dont's Miss Out
          </p>
        </Fade>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div>
          <img className="w-full h-[500px]" src={discount1} alt="" />
        </div>
        <div>
          <img
            className="w-full h-[500px] dark:bg-black"
            src={discount2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
