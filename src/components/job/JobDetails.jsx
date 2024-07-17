// import { useLoaderData } from "react-router-dom";
// import moment from "moment";

// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import JobDetailsHead from "./JobDetailsHead";

const JobDetails = () => {
  // const job = useLoaderData();
  // const { user } = useContext(AuthContext);

  // const desc = job?.descriptoion?.split("\n");

  return (
    <>
      <JobDetailsHead />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 utf-content-right-offset-aera">
            <div className="utf-single-page-section-aera">
              <div className="job-description-image-aera">
                <img src="/images/job-detail-inner.png" alt="" />
              </div>
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-description"></i> Jobs
                  Description
                </h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of printing and type setting
                industry. Lorem Ipsum been industry standard dummy text ever
                since, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the {"industry's"}{" "}
                standard dummy text ever since, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
              <ul className="utf-job-deatails-content-item margin-bottom-30">
                <li>
                  <i className="icon-feather-arrow-right"></i> Morbi mattis
                  ullamcorper velit. Phasellus gravida semper nisi nullam vel
                  sem.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Etiam ultricies
                  nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
                  dui. Etiam rhoncus.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Donec mollis
                  hendrerit risus. Phasellus nec sem in justo pellentesque
                  facilisis.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Praesent congue
                  erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                  vulputate arcu.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Donec elit
                  libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
                  sagittis.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Pellentesque
                  auctor neque nec urna. Proin sapien ipsum, porta a, auctor
                  quis, euismod ut, mi.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.
                </li>
              </ul>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-12">
                  <a
                    href="#small-dialog"
                    className="apply-now-button popup-with-zoom-anim margin-top-0"
                  >
                    Apply Now <i className="icon-feather-chevron-right"></i>
                  </a>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-12">
                  <a href="#" className="button save-job-btn">
                    Get Job Alerts{" "}
                    <i className="icon-feather-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="utf-detail-social-sharing margin-top-25">
                <span>
                  <strong>Social Sharing:-</strong>
                </span>
                <ul className="margin-top-15">
                  <li>
                    <a href="#" title="Facebook" data-tippy-placement="top">
                      <i className="icon-brand-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter" data-tippy-placement="top">
                      <i className="icon-brand-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="LinkedIn" data-tippy-placement="top">
                      <i className="icon-brand-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google Plus" data-tippy-placement="top">
                      <i className="icon-brand-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Whatsapp" data-tippy-placement="top">
                      <i className="icon-brand-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Pinterest" data-tippy-placement="top">
                      <i className="icon-brand-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-feather-briefcase"></i> Education
                  Qualification
                </h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the {"industry's"}{" "}
                standard dummy text ever since, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <ul className="utf-job-deatails-content-item">
                <li>
                  <i className="icon-feather-arrow-right"></i> Morbi mattis
                  ullamcorper velit. Phasellus gravida semper nisi nullam vel
                  sem.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Etiam ultricies
                  nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
                  dui. Etiam rhoncus.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Donec mollis
                  hendrerit risus. Phasellus nec sem in justo pellentesque
                  facilisis.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Praesent congue
                  erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                  vulputate arcu.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Donec elit
                  libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
                  sagittis.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Pellentesque
                  auctor neque nec urna. Proin sapien ipsum, porta a, auctor
                  quis, euismod ut, mi.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.
                </li>
              </ul>
            </div>

            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i>{" "}
                  Required Skills and Abilities
                </h3>
              </div>
              <ul className="utf-job-deatails-content-item">
                <li>
                  <i className="icon-feather-arrow-right"></i> Commitment –
                  understanding the price and having the willingness to pay that
                  price
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Taking action –
                  practice Ready, Fire, Aim…
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> You will drift
                  aimlessly until you arrive back at the original dock.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> You will run
                  aground and become hopelessly stuck in the mud.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Belief –
                  believing in yourself and those around you.
                </li>
              </ul>
            </div>

            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i>{" "}
                  Primary Responsibilities
                </h3>
              </div>
              <ul className="utf-job-deatails-content-item">
                <li>
                  <i className="icon-feather-arrow-right"></i> HTML, CSS & Scss
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Javascript
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> PHP Developer
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Photoshop
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Illustrator
                </li>
              </ul>
            </div>

            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-location-on"></i> Jobs
                  Location
                </h3>
              </div>
              <div id="utf-single-job-map-container-item">
                <div
                  id="singleListingMap"
                  data-latitude="48.8566"
                  data-longitude="2.3522"
                  data-map-icon="im im-icon-Hamburger"
                ></div>
              </div>
            </div>

            <div className="utf-boxed-list-item margin-bottom-60">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i>{" "}
                  People Also Viewed
                </h3>
              </div>
              <div className="utf-listings-container-part compact-list-layout">
                <a href="single-job-page.html" className="utf-job-listing">
                  <div className="utf-job-listing-details">
                    <div className="utf-job-listing-company-logo">
                      {" "}
                      <img src="/images/company_logo_1.png" alt="" />{" "}
                    </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Full Time
                      </span>
                      <h3 className="utf-job-listing-title">
                        Website Developer & Software Developer
                      </h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li>
                            <i className="icon-feather-briefcase"></i> Software
                            Developer
                          </li>
                          <li>
                            <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                            $35000-$38000
                          </li>
                          <li>
                            <i className="icon-material-outline-location-on"></i>{" "}
                            Drive Potsdam, NY 676
                          </li>
                          <li>
                            <i className="icon-material-outline-access-time"></i>{" "}
                            15 Minute Ago
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="bookmark-icon"></span>
                </a>
                <a href="single-job-page.html" className="utf-job-listing">
                  <div className="utf-job-listing-details">
                    <div className="utf-job-listing-company-logo">
                      {" "}
                      <img src="/images/company_logo_2.png" alt="" />{" "}
                    </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Full Time
                      </span>
                      <h3 className="utf-job-listing-title">
                        Head of Developers & MySQL Developers
                      </h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li>
                            <i className="icon-feather-briefcase"></i> Software
                            Developer
                          </li>
                          <li>
                            <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                            $35000-$38000
                          </li>
                          <li>
                            <i className="icon-material-outline-location-on"></i>{" "}
                            Drive Potsdam, NY 676
                          </li>
                          <li>
                            <i className="icon-material-outline-access-time"></i>{" "}
                            30 Minute Ago
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="bookmark-icon"></span>
                </a>
                <a href="single-job-page.html" className="utf-job-listing">
                  <div className="utf-job-listing-details">
                    <div className="utf-job-listing-company-logo">
                      {" "}
                      <img src="/images/company_logo_3.png" alt="" />{" "}
                    </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Full Time
                      </span>
                      <h3 className="utf-job-listing-title">
                        Frontend/Backendd Developer
                      </h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li>
                            <i className="icon-feather-briefcase"></i> Software
                            Developer
                          </li>
                          <li>
                            <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                            $35000-$38000
                          </li>
                          <li>
                            <i className="icon-material-outline-location-on"></i>{" "}
                            Drive Potsdam, NY 676
                          </li>
                          <li>
                            <i className="icon-material-outline-access-time"></i>{" "}
                            55 Minute Ago
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="bookmark-icon"></span>
                </a>
                <a href="single-job-page.html" className="utf-job-listing">
                  <div className="utf-job-listing-details">
                    <div className="utf-job-listing-company-logo">
                      {" "}
                      <img src="images/company_logo_4.png" alt="" />{" "}
                    </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item yellow">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Part Time
                      </span>
                      <h3 className="utf-job-listing-title">
                        Application Developer & Web Designer
                      </h3>
                      <div className="utf-job-listing-footer">
                        <ul>
                          <li>
                            <i className="icon-feather-briefcase"></i> Software
                            Developer
                          </li>
                          <li>
                            <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                            $35000-$38000
                          </li>
                          <li>
                            <i className="icon-material-outline-location-on"></i>{" "}
                            Drive Potsdam, NY 676
                          </li>
                          <li>
                            <i className="icon-material-outline-access-time"></i>{" "}
                            1 Days Ago
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="bookmark-icon"></span>
                </a>
              </div>
              <div className="utf-centered-button margin-top-10">
                {" "}
                <a
                  href="jobs-list-layout-leftside.html"
                  className="button utf-button-sliding-icon"
                >
                  View More Jobs <i className="icon-feather-chevron-right"></i>
                </a>{" "}
              </div>
            </div>
          </div>

          {/* <!-- Sidebar --> */}
          <div className="col-xl-4 col-lg-4">
            <div className="utf-sidebar-container-aera">
              <div className="utf-sidebar-widget-item">
                <h3>Offered Salary</h3>
                <div className="utf-right-side">
                  <div className="salary-box">
                    <div className="salary-amount">£25,000 - £30,000</div>
                  </div>
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <div className="utf-job-overview">
                  <div className="utf-job-overview-headline">
                    Jobs Position Information
                  </div>
                  <div className="utf-job-overview-inner">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business-center"></i>{" "}
                        <span>Job Vacancy:</span>
                        <h5>PHP Developer</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-account-circle"></i>{" "}
                        <span>Gender</span>
                        <h5>Female</h5>
                      </li>
                      <li>
                        <i className="icon-line-awesome-glass"></i>{" "}
                        <span>Experience</span>
                        <h5>2.6 Years</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i>{" "}
                        <span>Location</span>
                        <h5>Bothell, WA, USA</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i>{" "}
                        <span>Jobs Type</span>
                        <h5>Full Time</h5>
                      </li>
                      <li>
                        <i className="icon-line-awesome-gg-circle"></i>{" "}
                        <span>Qualification</span>
                        <h5>Bachelor Degree</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i>{" "}
                        <span>Date Posted</span>
                        <h5>2 days ago</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="utf-sidebar-widget-item">
                <h3>Tags Cloud</h3>
                <div className="task-tags">
                  <a href="#">
                    <span>Business</span>
                  </a>
                  <a href="#">
                    <span>Investment </span>
                  </a>
                  <a href="#">
                    <span>Audit</span>
                  </a>
                  <a href="#">
                    <span>Assurance</span>
                  </a>
                  <a href="#">
                    <span>Consulting </span>
                  </a>
                  <a href="#">
                    <span>Partnership</span>
                  </a>
                  <a href="#">
                    <span>Secutity</span>
                  </a>
                  <a href="#">
                    <span>Camera</span>
                  </a>
                </div>
              </div>

              <div className="utf-sidebar-widget-item">
                <h3>Quick Contacts</h3>
                <form method="post" name="contactform" id="contact">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="utf-no-border">
                        <input
                          className="utf-with-border"
                          name="fristname"
                          type="text"
                          id="fristname"
                          placeholder="Frist Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="utf-no-border">
                        <input
                          className="utf-with-border"
                          name="lastname"
                          type="text"
                          id="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="utf-no-border">
                        <input
                          className="utf-with-border"
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="utf-no-border">
                        <input
                          className="utf-with-border"
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="utf-with-border"
                      name="comments"
                      cols="40"
                      rows="2"
                      id="comments"
                      placeholder="Message..."
                      required
                    ></textarea>
                  </div>
                  <div className="utf-centered-button margin-top-10">
                    <input
                      type="submit"
                      className="submit button"
                      id="submit"
                      value="Submit Message"
                    />
                  </div>
                </form>
              </div>

              <div className="utf-sidebar-widget-item">
                <h3>Bookmark Jobs</h3>
                <p className="bookmark-text-item">950 People Bookmarked Jobs</p>
                <button className="bookmark-button margin-bottom-10">
                  {" "}
                  <span className="bookmark-icon"></span>{" "}
                  <span className="bookmark-text">Login to Bookmark Jobs</span>{" "}
                  <span className="bookmarked-text">
                    Login to Bookmark Jobs
                  </span>{" "}
                </button>
              </div>

              <div className="utf-sidebar-widget-item">
                <h3>Print Job & Report Job</h3>
                <a href="#" className="button dark">
                  Print Jobs <i className="icon-line-awesome-print"></i>
                </a>
                <a href="#" className="button dark">
                  Report Jobs <i className="icon-feather-flag"></i>
                </a>
              </div>

              <div className="utf-sidebar-widget-item">
                <div className="utf-detail-banner-add-section">
                  <a href="#">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
