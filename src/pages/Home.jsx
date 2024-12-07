import { MdDarkMode } from "react-icons/md";
import About from "../components/About";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Discount from "../components/Discount";
import EquipmentCards from "../components/EquipmentCards";
import { useTheme } from "../theme/useTheme";
import AboutUs from "./AboutUs";
import { LuLightbulb } from "react-icons/lu";

const Home = () => {
  const { changeTheme, mode } = useTheme();
  return (
    <>
      <header>
        <div className="">
          <div className=" absolute top-3 right-24 md:right-52 lg:top-[110px]  lg:right-[500px] ">
            <button onClick={changeTheme} className="text-4xl dark:text-white">
              {mode === "light" ? <MdDarkMode /> : <LuLightbulb />}
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
        <section className="w-11/12 md:w-2/3 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <EquipmentCards></EquipmentCards>
        </section>
        <section className="w-11/12 md:w-2/3 mx-auto my-10 ">
          <ContactUs></ContactUs>
        </section>
        <section className=" bg-[#F7F8F8]  dark:bg-[#242424] dark:text-white py-10">
          <AboutUs></AboutUs>
        </section>
      </main>
    </>
  );
};

export default Home;
