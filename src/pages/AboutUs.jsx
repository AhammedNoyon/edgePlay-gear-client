import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="my-20 w-11/12 md:w-2/3 mx-auto">
      <h3 className="text-lg font-bold text-naBarBg">WE ARE EdgePlay Gear</h3>
      <h1 className="text-2xl mt-6 font-bold">
        Leading sports equipments store in Bangladesh
      </h1>
      <div className="mt-6">
        <h3 className="text-2xl mb-3 font-bold">SINCE 1965!</h3>
        <p>
          Over the last 75 years, our focus has always been-and will continue to
          be-delivering a quality experience with our equipment. We understand
          that our products are an investment and we source them to keep pace
          with your own longterm sports goals.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl mb-3 font-bold">OUR STRENGTH, OUR PARTNERS</h3>
        <p>
          A wide variety of fitness goods and equipment from around to globe to
          meet the needs of our clients.
        </p>
      </div>
      <button className="border-b-2 border-naBarBg mt-6 text-lg font-bold">
        <Link>More About Us</Link>
      </button>
    </div>
  );
};

export default AboutUs;
