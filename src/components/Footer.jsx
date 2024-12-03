import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:items-center">
        {/* About Section */}
        <div>
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="h-14 w-14">
              <img src={logo} alt="" className=" w-full" />
            </div>
            <h3 className="text-5xl font-bold text-[#00BFA6] ml-4">
              EdgePlay{" "}
            </h3>
            <h3 className="text-xl font-bold">Gear</h3>
          </div>
          <p className="mt-2 text-sm">
            Your ultimate destination for premium sports equipment. Gear up for
            greatness with us!
          </p>
          <p className="mt-2 text-sm">
            Email: contact@sportsgear.com <br />
            Phone: +880 1234 567890
          </p>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
          <h2 className="text-lg font-bold text-white mt-6 mb-2">
            Join Our Newsletter
          </h2>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-2 bg-gray-700 text-white"
            />
            <button className="btn bg-naBarBg w-full">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Champion's Choice. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
