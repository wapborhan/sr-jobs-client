import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Root = () => {
  return (
    <div id="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
