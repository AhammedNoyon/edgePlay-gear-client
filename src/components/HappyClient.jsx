import Marquee from "react-fast-marquee";
import usa from "../assets/usa.webp";
import canada from "../assets/canada.jpg";
import pakistan from "../assets/pakistan.jpg";
import india from "../assets/india.png";

const HappyClient = () => {
  return (
    <div>
      <div className="text-center mb-10 w-11/12 md:w-full mx-auto">
        <h3
          data-aos="fade-up"
          className="text-3xl font-bold dark:text-white mb-2"
        >
          Our Happy Clients
        </h3>

        <p
          data-aos="fade-up"
          className="dark:text-white w-11/12 md:w-2/5 mx-auto"
        >
          Our clients are the heart of our success! We take pride in delivering
          exceptional sports equipment and outstanding service, ensuring every
          customer leaves with a smile.
        </p>
      </div>
      <Marquee>
        <div className="card m-5 bg-base-100  image-full w-96 shadow-xl ">
          <figure>
            <img src={usa} alt="usa" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">USA</h2>
            <p>Trusted by thousands of sports enthusiasts worldwide.</p>
          </div>
        </div>
        <div className="card m-5 bg-base-100  image-full w-96 shadow-xl ">
          <figure>
            <img src={canada} alt="usa" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CANADA</h2>
            <p>Delivering smiles with every purchase.</p>
          </div>
        </div>
        <div className="card m-5 bg-base-100  image-full w-96 shadow-xl ">
          <figure>
            <img src={pakistan} alt="usa" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PAKISTAN</h2>
            <p>Empowering athletes with top-quality gear .</p>
          </div>
        </div>
        <div className="card m-5 bg-base-100  image-full w-96 shadow-xl ">
          <figure>
            <img src={india} alt="india" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">INDIA</h2>
            <p>Your satisfaction fuels our passion.</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClient;
