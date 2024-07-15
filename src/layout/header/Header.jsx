import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import ProfileNav from "./ProfileNav";

const Header = () => {
  return (
    <>
      <header id="utf-header-container-block">
        <div id="header">
          <div className="container">
            <div className="utf-left-side">
              <div id="logo">
                <NavLink to="/">
                  <img src="images/logo-dark.png" alt="" />
                </NavLink>
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

export default Header;
