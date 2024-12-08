import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Tooltip } from "react-tooltip";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default MainLayout;
