import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import BackToTop from "../components/shared/BackToTop";
import DashSidebar from "../pages/dashboard/sidebar/DashSidebar";
import ScrollToTop from "../components/shared/ScrollToTop";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const DashLayout = () => {
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
        <DashHeader />
        <div className="utf-dashboard-container-aera">
          <DashSidebar />
          <div className="utf-dashboard-content-container-aera" data-simplebar>
            <ScrollToTop />
            <Outlet />
            <div className="utf-dashboard-footer-spacer-aera"></div>
            <div className="utf-small-footer margin-top-15">
              <div className="utf-small-footer-copyrights">
                Copyright &copy; 2024 All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </>
  );
};

export default DashLayout;
