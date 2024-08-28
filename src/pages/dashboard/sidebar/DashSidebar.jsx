import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useSingleUser from "../../../hooks/useSingleUser";
import useMyJobs from "../../../hooks/useMyJobs";

const DashSidebar = () => {
  const { user } = useContext(AuthContext);
  const [myJobs] = useMyJobs(user?.email);
  const [singleUser] = useSingleUser(user?.email);
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
          <a href="#" className="utf-dashboard-responsive-trigger-item">
            {" "}
            <span className="hamburger utf-hamburger-collapse-item">
              {" "}
              <span className="utf-hamburger-box-item">
                {" "}
                <span className="utf-hamburger-inner-item"></span>{" "}
              </span>{" "}
            </span>{" "}
            <span className="trigger-title">Dashboard Navigation Menu</span>{" "}
          </a>
          {/* <!-- Navigation --> */}
          <div className="utf-dashboard-nav">
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
                </div>{" "}
              </div>

              <div className="clearfix"></div>
              <ul>
                <li>
                  <NavLink to="/dashboard/home">
                    <i className="icon-material-outline-dashboard"></i>{" "}
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/company/add">
                    <i className="icon-material-outline-dashboard"></i> Add
                    Company
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/dashboard/company/view">
                    <i className="icon-material-outline-dashboard"></i> View
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/jobs/add">
                    <i className="icon-line-awesome-user-secret"></i> Manage
                    Jobs Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/jobs/view">
                    <i className="icon-material-outline-group"></i> Manage Jobs{" "}
                    <span className="nav-tag">{myJobs && myJobs.length}</span>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="dashboard-manage-resume.html">
                    <i className="icon-material-outline-supervisor-account"></i>{" "}
                    Manage Resume
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/dashboard/bookmarks">
                    <i className="icon-feather-heart"></i> Bookmarks Jobs
                  </NavLink>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="icon-line-awesome-file-text"></i> Freelancer
                    Tasks
                  </a>
                  <ul className="dropdown-nav">
                    <li>
                      <a href="dashboard-freelancer-manage-tasks-list.html">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        Freelancer Manage Tasks
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-manage-bidders-list.html">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        Freelancer Manage Bidders
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-freelancer-active-bids.html">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        Freelancer Active Bids
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-freelancer-add-post-bids.html">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        Freelancer Post Bids
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <a href="dashboard-reviews.html">
                    <i className="icon-material-outline-rate-review"></i>{" "}
                    Reviews
                  </a>
                </li> */}
                {/* <li className="actives">
                  <NavLink to="/dashboard/profile">
                    <i className="icon-feather-user"></i> My Profile
                  </NavLink>
                </li>{" "} */}
                <li className="actives">
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
