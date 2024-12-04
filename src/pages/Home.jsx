import About from "../components/About";
import Banner from "../components/Banner";
import Discount from "../components/Discount";
import EquipmentCards from "../components/EquipmentCards";

const Home = () => {
  return (
    <>
      <header>
        <div>
          <Banner></Banner>
        </div>
        <div className="bg-[#F7F8F8]">
          <About></About>
        </div>
      </header>
      <main className="">
        <section className="my-20">
          <Discount></Discount>
        </section>
        <section className="w-11/12 md:w-2/3 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <EquipmentCards></EquipmentCards>
        </section>
      </main>
    </>
  );
};

export default Home;
