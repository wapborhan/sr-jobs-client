import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./navbar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/job">
          All Jobs
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink className="nav-link" to="/applied-jobs">
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/add-jobs">
              Add A Job
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-jobs" className="nav-link">
              My Jobs
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li className="nav-item">
        <NavLink to="/blogs" className="nav-link">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-md border-b-2">
        <div className="container max-w-7xl mx-auto justify-between">
          <div className="navbar-start flex items-center ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="normal-case text-xl">
              <img src="/images/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menus menu-horizontal px-1  gap-3">{links}</ul>
          </div>
          <div className="navbar-end flex gap-3 items-center justify-end">
            {user?.email ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink to="/profile" className="justify-between">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings">Settings</NavLink>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="btn btn-outline lg:inline-flex hidden btn-success"
                >
                  <span className="nav-link">Registration</span>
                </NavLink>
                <NavLink to="/signin" className="btn btn-outline btn-info">
                  <span className="nav-link">login</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
