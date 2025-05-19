import { Typewriter } from "react-simple-typewriter";
import contact from "../assets/contact.avif";

const ContactUs = () => {
  return (
    <div className="dark:bg-[#242424] dark:rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div className="dark:text-white dark:px-5">
        <div className="text-center lg:text-start mb-10 ">
          <div className="">
            <h3 className="flex items-center gap-2">
              <span className="text-3xl font-bold ">CONTACT US</span>
              {""}
              <span className="text-naBarBg font-bold text-lg">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Please Here Your Info!"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </div>
          <p className="mt-3">
            Have questions or need assistance? Feel free to reach out to us, and
            our team will be happy to help you with all your sports equipment
            needs!
          </p>
        </div>
        <div className="card bg-base-100 dark:bg-[#242424] w-full  shrink-0 ">
          <form className="card-body p-0 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered dark:bg-[#505050] dark:text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered dark:bg-[#505050] dark:text-white"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover  dark:text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn border border-naBarBg text-naBarBg font-bold hover:bg-naBarBg hover:text-white dark:bg-[#505050] dark:text-white">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img className="w-full" src={contact} alt="contact" />
      </div>
    </div>
  );
};

export default ContactUs;
