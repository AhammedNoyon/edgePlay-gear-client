import { useEffect } from "react";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category3.jpg";
import category3 from "../assets/category4.jpg";
import category4 from "../assets/category2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const CategoryProduct = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div className="w-11/12 md:w-2/3 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold dark:text-white">
          Explore Sports Categories
        </h3>
        <p className="dark:text-white w-full md:w-3/5 mx-auto">
          Dive into our diverse collection of sports equipment categories! From
          high-performance gear for professionals to essentials for beginners,
          find everything you need to excel in your favorite sport. Browse by
          category and discover equipment tailored to your passion.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-10"
      >
        <div>
          <img
            className="w-full md:h-[156px] lg:h-[416px]  mx-auto"
            src={category2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full md:h-[156px] lg:h-[416px] mx-auto"
            src={category1}
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full md:h-[156px] lg:h-[416px]  mx-auto"
            src={category3}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full md:h-[156px] lg:h-[416px]  mx-auto"
            src={category4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
