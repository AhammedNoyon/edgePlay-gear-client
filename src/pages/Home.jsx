import { MdDarkMode } from "react-icons/md";
import About from "../components/About";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Discount from "../components/Discount";
import EquipmentCards from "../components/EquipmentCards";
import { useTheme } from "../theme/useTheme";
import AboutUs from "./AboutUs";
import { LuLightbulb } from "react-icons/lu";
import CategoryProduct from "../components/CategoryProduct";
import { useLoaderData } from "react-router-dom";
import HappyClient from "../components/HappyClient";
import { Typewriter } from "react-simple-typewriter";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const Home = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData);
  const { changeTheme, mode } = useTheme();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <header>
        <div className="">
          <div className=" absolute top-[68px] right-2 md:top-[70px] md:right-8 lg:top-[110px]  lg:right-[500px] ">
            <button onClick={changeTheme} className="text-4xl dark:text-white">
              {mode === "light" ? (
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Dark Mode"
                >
                  <MdDarkMode />{" "}
                </div>
              ) : (
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="white Mode"
                  data-tooltip-place="top"
                >
                  <LuLightbulb />
                </div>
              )}
            </button>
          </div>
          <Banner></Banner>
        </div>
        <div className="bg-[#F7F8F8] dark:bg-[#242424] dark:text-white">
          <About></About>
        </div>
      </header>
      <main className="">
        <section className="my-20">
          <Discount></Discount>
        </section>
        <section className="my-10 md:my-20">
          <CategoryProduct loadedData={loadedData}></CategoryProduct>
        </section>
        <section>
          <div className="w-11/12 md:w-2/3 mx-auto">
            <div className="dark:text-white">
              <h3 className="flex items-center gap-2">
                <span className="md:text-3xl font-bold ">
                  Explore Our Premium
                </span>
                {""}
                <span className="text-naBarBg font-bold md:text-lg">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Sports Equipments !"]}
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
            <p className="mt-3 w-full md:w-3/5 dark:text-white/70">
              Gear up for success with our top-quality sports equipment! Whether
              you're a professional athlete or a passionate enthusiast, we have
              the perfect gear to elevate your performance and fuel your passion
              for the game
            </p>
          </div>
          <div className="w-11/12 md:w-2/3 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <EquipmentCards></EquipmentCards>
          </div>
        </section>
        <section className="w-11/12 md:w-2/3 mx-auto my-10 ">
          <ContactUs></ContactUs>
        </section>
        <section className="my-10 md:my-20">
          <HappyClient></HappyClient>
        </section>
        <section className=" bg-[#F7F8F8]  dark:bg-[#242424] dark:text-white py-10">
          <AboutUs></AboutUs>
        </section>
      </main>
    </>
  );
};

export default Home;
