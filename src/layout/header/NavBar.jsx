import { NavLink } from "react-router-dom";
import ProfileNav from "./ProfileNav";

const NavBar = () => {
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
                    <NavLink href="/">Contact</NavLink>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="about-us.html">
                          <i className="icon-feather-chevron-right"></i> About
                          Us
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
                          <i className="icon-feather-chevron-right"></i> Order
                          Checkout
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
                          <i className="icon-feather-chevron-right"></i> User
                          Elements
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
                          <i className="icon-feather-chevron-right"></i> FAQ
                          Page
                        </a>
                      </li>
                      <li>
                        <a href="pages-404.html">
                          <i className="icon-feather-chevron-right"></i> 404
                          Page
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>

            <div className="utf-right-side">
              <div className="utf-header-widget-item">
                <a
                  href="#utf-signin-dialog-block"
                  className="popup-with-zoom-anim log-in-button"
                >
                  <i className="icon-feather-log-in"></i> <span>Sign In</span>
                </a>
              </div>
              <div className="utf-header-widget-item">
                <ProfileNav />
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
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
    </>
  );
};

export default NavBar;
