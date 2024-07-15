import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import BackToTop from "../components/shared/BackToTop";
import DashSidebar from "../pages/dashboard/sidebar/DashSidebar";

const DashLayout = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="utf-dashboard-container-aera">
        <DashSidebar />
        <div className="utf-dashboard-content-container-aera" data-simplebar>
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
  );
};

export default DashLayout;
