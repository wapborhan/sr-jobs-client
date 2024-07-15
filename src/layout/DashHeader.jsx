import NavBar from "./NavBar";
import ProfileNav from "./ProfileNav";

const DashHeader = () => {
  return (
    <>
      <header
        id="utf-header-container-block"
        className="fullwidth dashboard-header not-sticky"
        style={{ position: "fixed" }}
      >
        <div id="header">
          <div className="container">
            <div className="utf-left-side">
              <div id="logo">
                {" "}
                <a href="index-1.html">
                  <img src="/images/logo-dark.png" alt="" />
                </a>{" "}
              </div>
              <NavBar />
              <div className="clearfix"></div>
            </div>

            <ProfileNav />
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
    </>
  );
};

export default DashHeader;
