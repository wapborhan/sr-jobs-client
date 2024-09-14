import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useSingleUser from "../../../hooks/useSingleUser";
import useMyJobs from "../../../hooks/useMyJobs";

const DashSidebar = () => {
  const { user } = useContext(AuthContext);
  const [myJobs] = useMyJobs(user?.email);
  const [singleUser] = useSingleUser(user?.email);
  const [dashMenu, setDashMenu] = useState(false);
  return (
    <div className="utf-dashboard-sidebar-item ">
      <div className="utf-dashboard-sidebar-item-inner" data-simplebar>
        <div
          className="simplebar-track vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ visibility: "visible", top: "0px", height: "39px" }}
          ></div>
        </div>
        <div className="utf-dashboard-nav-container">
          {/* <!-- Responsive Navigation Trigger -->  */}
          <a
            href="#"
            className={`utf-dashboard-responsive-trigger-item ${
              dashMenu && "active"
            }`}
          >
            <span
              className={`hamburger utf-hamburger-collapse-item ${
                dashMenu && "is-active"
              } `}
              onClick={() => setDashMenu(!dashMenu)}
            >
              <span className="utf-hamburger-box-item">
                <span className="utf-hamburger-inner-item"></span>
              </span>
            </span>
            <span className="trigger-title">Dashboard Navigation Menu</span>
          </a>
          {/* <!-- Navigation --> */}
          <div className={`utf-dashboard-nav ${dashMenu && "active"}`}>
            <div className="utf-dashboard-nav-inner">
              <div className="dashboard-profile-box">
                <span className="avatar-img">
                  <img
                    alt=""
                    src={user && singleUser?.photoUrl}
                    className="photo"
                  />
                </span>
                <div className="user-profile-text">
                  <span className="fullname">{user && singleUser?.name}</span>
                  <span className="user-role text-capitalize">
                    {user && singleUser?.accountType}
                  </span>
                </div>
              </div>

              <div className="clearfix"></div>
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/home"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-material-outline-dashboard"></i>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/company/add"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-material-outline-dashboard"></i> Add
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/company/view"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-material-outline-dashboard"></i> View
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/jobs/add"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-line-awesome-user-secret"></i> Manage
                    Jobs Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/jobs/view"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-material-outline-group"></i> Manage Jobs
                    <span className="nav-tag">{myJobs && myJobs.length}</span>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="dashboard-manage-resume.html">
                    <i className="icon-material-outline-supervisor-account"></i>
                    Manage Resume
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/dashboard/bookmarks"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-feather-heart"></i> Bookmarks Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/applied"
                    onClick={() => setDashMenu(!dashMenu)}
                  >
                    <i className="icon-line-awesome-file-text"></i> Applied Job
                  </NavLink>
                </li>
                {/* <li>
                  <a href="dashboard-reviews.html">
                    <i className="icon-material-outline-rate-review"></i>
                    Reviews
                  </a>
                </li> */}
                {/* <li className="actives">
                  <NavLink to="/dashboard/profile">
                    <i className="icon-feather-user"></i> My Profile
                  </NavLink>
                </li> */}
                <li className="actives" onClick={() => setDashMenu(!dashMenu)}>
                  <NavLink to="/dashboard/users">
                    <i className="icon-feather-user"></i> Users
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
