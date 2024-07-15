import { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProfileNav = () => {
  const [menu, setMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = () => {
    logOut();
    setMenu(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  console.log(user);
  return (
    <>
      <div className="utf-right-side" ref={menuRef}>
        <div className="utf-header-widget-item">
          {!user && (
            <NavLink
              to="/signin"
              className="popup-with-zoom-anim log-in-button"
            >
              <i className="icon-feather-log-in"></i> <span>Sign In</span>
            </NavLink>
          )}
        </div>
        <div className="utf-header-widget-item">
          <div
            className={
              menu
                ? `utf-header-notifications user-menu active`
                : "utf-header-notifications user-menu"
            }
          >
            <div className="utf-header-notifications-trigger user-profile-title">
              <div onClick={() => setMenu(!menu)} className="cursor-pointer">
                {user && (
                  <>
                    <div className="user-avatar status-online">
                      <img src={user?.photoURL} alt="pic" />
                    </div>
                    <div className="user-name"> {user?.displayName}</div>
                  </>
                )}
              </div>
            </div>
            <div className="utf-header-notifications-dropdown-block">
              <ul className="utf-user-menu-dropdown-nav">
                <li>
                  <Link to="/dashboard/profile">
                    <i className="icon-feather-user"></i> My Profile
                  </Link>
                </li>
                <li>
                  <a href="dashboard.html">
                    <i className="icon-material-outline-dashboard"></i>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="dashboard-jobs-post.html">
                    <i className="icon-line-awesome-user-secret"></i> Manage
                    Jobs Post
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
                  <a onClick={handleLogout} className="cursor-pointer">
                    <i className="icon-material-outline-power-settings-new"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="mmenu-trigger">
          <button
            className="hamburger utf-hamburger-collapse-item"
            type="button"
          >
            <span className="utf-hamburger-box-item">
              <span className="utf-hamburger-inner-item"></span>
            </span>
          </button>
        </span>
      </div>
    </>
  );
};

export default ProfileNav;
