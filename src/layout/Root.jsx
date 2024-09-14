import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../components/shared/BackToTop";
import ScrollToTop from "../components/shared/ScrollToTop";
import { useEffect, useState } from "react";
import Subscription from "./Subscription";
import MobileMenu from "./MobileMenu";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
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
      )}{" "}
      <MobileMenu />
      <div id="wrapper">
        <Header />
        <ScrollToTop />
        <Outlet />
        <BackToTop />
        <Subscription />
        <Footer />
      </div>
    </>
  );
};

export default Root;
