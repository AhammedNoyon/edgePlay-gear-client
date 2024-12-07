import contact from "../assets/contact.avif";

const ContactUs = () => {
  return (
    <div className="dark:bg-[#242424] dark:rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div className="dark:text-white dark:px-5">
        <div className="text-center lg:text-start mb-10 ">
          <h3 className="text-3xl font-bold">CONTACT US</h3>
          <p>YOUR TEXT HERE</p>
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
