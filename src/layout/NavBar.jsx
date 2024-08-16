import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="navigation">
        <ul id="responsive">
          <li>
            <NavLink to="/" className="current">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/job">Find Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/company">Companies</NavLink>
          </li>
          <li>
            <NavLink to="/jobs-categorie">Categorie</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </>
  );
};

export default NavBar;
