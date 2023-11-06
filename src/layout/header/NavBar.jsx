import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/">
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/">
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
      <li className="nav-item">
        <NavLink to="/my-jobs" className="nav-link">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="container max-w-7xl mx-auto justify-between">
          <div className="navbar-start flex items-center ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <img src="assets/images/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  gap-3">{links}</ul>
          </div>
          <div className="navbar-end flex gap-3 items-center justify-end">
            <button className="btn btn-outline btn-success cursor-pointer">
              <NavLink to="/signup" className="nav-link">
                Registration
              </NavLink>
            </button>
            <button className="btn btn-outline btn-info cursor-pointer">
              <NavLink to="/signin" className="nav-link">
                login
              </NavLink>
            </button>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
