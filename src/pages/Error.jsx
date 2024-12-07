import Lottie from "lottie-react";
import errorAnimation from ".././../public/Animation - 1733600793852.json";
import error from "../assets/error.avif";
const Error = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-20">
      <div className="w-96 h-96 mx-auto">
        <Lottie animationData={errorAnimation} />
      </div>
      <br />
      <div className="w-[500px] -mt-32">
        <img className="w-full" src={error} alt="error" />
      </div>
    </div>
  );
};

export default Error;
