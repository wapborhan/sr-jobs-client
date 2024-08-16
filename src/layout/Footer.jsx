import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="utf-footer-section-item-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="utf-footer-item-links">
                <Link to="/">
                  <img
                    className="footer-logo"
                    src="/images/logo-dark.png"
                    alt=""
                  />
                </Link>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when unknown printer took a galley type scrambled.
                </p>
              </div>
            </div>

            <div className="col-xl-2 col-md-3 col-sm-6">
              <div className="utf-footer-item-links">
                <h3>Job Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Developement</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Designing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Marketing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Data Analytics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Post New Job</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-3 col-sm-6">
              <div className="utf-footer-item-links">
                <h3>Job Type</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Work from Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Internship Job</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Freelancer Job</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Part Time Job</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Full Time Job</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-3 col-sm-6">
              <div className="utf-footer-item-links">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>My Account</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Support</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>How It Works</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Underwriting</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Employers</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-3 col-sm-6">
              <div className="utf-footer-item-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Jobs Listing</span>
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html">
                      <i className="icon-feather-chevron-right"></i>
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="terms-condition.html">
                      <i className="icon-feather-chevron-right"></i>
                      <span>Term & Condition</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer Copyrights --> */}
      <div className="utf-footer-copyright-item">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              Copyright &copy; SR Jobs {new Date().getFullYear()} All Rights
              Reserved. Developed by{" "}
              <a href="http://www.srdreamlab.com">SR Dream Lab</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Copyrights / End --> */}
    </div>
  );
};

export default Footer;
