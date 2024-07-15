import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BackToTop from "../components/shared/BackToTop";

const Root = () => {
  return (
    <div id="wrapper">
      <Header />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Root;
