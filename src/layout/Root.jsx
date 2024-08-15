import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../components/shared/BackToTop";
import ScrollToTop from "../components/shared/ScrollToTop";

const Root = () => {
  return (
    <div id="wrapper">
      <Header />
      <ScrollToTop />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Root;
