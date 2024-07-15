import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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
