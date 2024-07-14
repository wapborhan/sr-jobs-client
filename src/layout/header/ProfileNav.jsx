// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";

const ProfileNav = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logOut();
  //   navigate("/");
  // };
  return (
    <div className="utf-header-notifications user-menu">
      <div className="utf-header-notifications-trigger user-profile-title">
        <a href="#">
          <div className="user-avatar status-online">
            <img src="images/user_small_1.jpg" alt="" />
          </div>
          <div className="user-name">Hi, John!</div>
        </a>
      </div>
      <div className="utf-header-notifications-dropdown-block">
        <ul className="utf-user-menu-dropdown-nav">
          <li>
            <a href="dashboard.html">
              <i className="icon-material-outline-dashboard"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a href="dashboard-jobs-post.html">
              <i className="icon-line-awesome-user-secret"></i> Manage Jobs Post
            </a>
          </li>
          <li>
            <a href="dashboard-manage-jobs.html">
              <i className="icon-material-outline-group"></i> Manage Jobs
            </a>
          </li>
          <li>
            <a href="dashboard-bookmarks.html">
              <i className="icon-material-outline-star-border"></i>
              Bookmarks Jobs
            </a>
          </li>
          <li>
            <a href="dashboard-my-profile.html">
              <i className="icon-feather-user"></i> My Profile
            </a>
          </li>
          <li>
            <a href="index-1.html">
              <i className="icon-material-outline-power-settings-new"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileNav;
