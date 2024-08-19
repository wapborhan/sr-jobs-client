import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../components/shared/BackToTop";
import ScrollToTop from "../components/shared/ScrollToTop";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="utf-preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div id="wrapper">
        <Header />
        <ScrollToTop />
        <Outlet />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default Root;
