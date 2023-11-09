import moment from "moment";
import ToggleTheme from "../ToggleTheme";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  const links = (
    <>
      <li className="nav-item">
        <NavLink to="/terms" className="nav-link">
          Terms
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/privacy" className="nav-link">
          Privacy Policy
        </NavLink>
      </li>
    </>
  );
  const date = new Date();
  return (
    <div className="top-bar lg:mx-0 px-5 border-b-2 py-2">
      <div className="container max-w-7xl mx-auto">
        <div className="flex gap-5 items-center justify-between">
          <div className="left">{moment(date).format("Do MMMM YYYY")}</div>

          <div className="right flex gap-10">
            <ul className="menusd menu-horizontal justify-end px-1  gap-3">
              {links}
            </ul>
            <div className="mr-5"></div>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
