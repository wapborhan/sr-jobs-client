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
            <NavLink to="/company">Browse Companies</NavLink>
          </li>
          <li>
            <NavLink href="/">Contact</NavLink>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="dropdown-nav">
              <li>
                <a href="about-us.html">
                  <i className="icon-feather-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="icon-feather-chevron-right"></i> Login
                </a>
              </li>
              <li>
                <a href="register.html">
                  <i className="icon-feather-chevron-right"></i> Sign Up
                </a>
              </li>
              <li>
                <a href="checkout-page.html">
                  <i className="icon-feather-chevron-right"></i> Order Checkout
                </a>
              </li>
              <li>
                <a href="order-confirmation.html">
                  <i className="icon-feather-chevron-right"></i> Order
                  Confirmation
                </a>
              </li>
              <li>
                <a href="invoice-template.html">
                  <i className="icon-feather-chevron-right"></i> Invoice
                  Template
                </a>
              </li>
              <li>
                <a href="user-elements.html">
                  <i className="icon-feather-chevron-right"></i> User Elements
                </a>
              </li>
              <li>
                <a href="icons-cheatsheet.html">
                  <i className="icon-feather-chevron-right"></i> Icons
                  Cheatsheet
                </a>
              </li>
              <li>
                <a href="faq-page.html">
                  <i className="icon-feather-chevron-right"></i> FAQ Page
                </a>
              </li>
              <li>
                <a href="pages-404.html">
                  <i className="icon-feather-chevron-right"></i> 404 Page
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </>
  );
};

export default NavBar;
