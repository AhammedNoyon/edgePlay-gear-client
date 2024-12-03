import Banner from "../components/Banner";
import EquipmentCards from "../components/EquipmentCards";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <Banner></Banner>
        </nav>
      </header>
      <main className="w-11/12 md:w-2/3 mx-auto">
        <section className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <EquipmentCards></EquipmentCards>
        </section>
      </main>
    </>
  );
};

export default Home;
