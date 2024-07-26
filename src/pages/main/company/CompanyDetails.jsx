import { Link, useLoaderData } from "react-router-dom";

const CompanyDetails = () => {
  const companyData = useLoaderData();
  const {
    compName,
    compLogoUrl,
    compCategories,
    compAdress,
    compWebsite,
    compEmail,
  } = companyData;
  const country = compAdress.split(",").slice(-1)[0];

  return (
    <>
      {" "}
      <div
        className="single-page-header"
        data-background-image="images/single-company.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf-single-page-header-inner-aera">
                <div className="utf-left-side">
                  <div className="utf-header-image">
                    <img src={compLogoUrl} alt="" />
                  </div>
                  <div className="utf-header-details">
                    <ul>
                      <li>
                        {country}{" "}
                        <img
                          className="flag"
                          src="/images/flags/us.svg"
                          alt=""
                          title="USA"
                          data-tippy-placement="top"
                        />
                      </li>
                    </ul>
                    <h3>
                      {compName}
                      <span
                        className="utf-verified-badge"
                        title="Verified"
                        data-tippy-placement="top"
                      ></span>
                    </h3>
                    <h4 className="text-muted">
                      <i className="icon-material-outline-business-center"></i>{" "}
                      {compCategories}
                    </h4>
                    <h4 className="text-muted">
                      <i className="icon-material-outline-email"></i>{" "}
                      {compEmail}
                    </h4>
                    <h5>
                      <i className="icon-material-outline-location-on"></i>{" "}
                      {compAdress}
                    </h5>
                    {/* <div className="utf-star-rating" data-rating="4.9"></div> */}
                  </div>
                </div>
                <div className="utf-right-side">
                  <div className="salary-box">
                    <Link
                      to={`${compWebsite}`}
                      className="apply-now-button popup-with-zoom-anim margin-top-0"
                    >
                      Website
                      <i className="icon-feather-chevron-right"></i>
                    </Link>
                    <span className="button save-job-btn margin-top-20">
                      Save Company
                      <i className="icon-feather-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 utf-content-right-offset-aera">
            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-feather-info"></i> About Company Details
                </h3>
              </div>
              <div className="job-description-image-aera">
                <img src="/images/job-detail-inner.png" alt="" />
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
                setting industry. Lorem Ipsum has been the standard dummy text
                ever since, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
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

            <div className="utf-boxed-list-item margin-bottom-30">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i> Open
                  Jobs Position List
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
                      <span className="dashboard-status-button utf-job-status-item yellow">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Part Time
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
                      <img src="/images/company_logo_4.png" alt="" />{" "}
                    </div>
                    <div className="utf-job-listing-description">
                      <span className="dashboard-status-button utf-job-status-item green">
                        <i className="icon-material-outline-business-center"></i>{" "}
                        Full Time
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
            </div>

            <div className="utf-boxed-list-item margin-bottom-60">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-star-border"></i> Visitor
                  Reviews
                </h3>
              </div>
              <ul className="utf-boxed-list-item-ul">
                <li>
                  <div className="utf-boxed-list-item-item">
                    <div className="item-content">
                      <h4>
                        John Williams <span>Software Developer</span>
                      </h4>
                      <a href="#" className="reply">
                        <i className="icon-line-awesome-reply-all"></i> Reply
                      </a>
                      <div className="item-details margin-top-10">
                        <div className="utf-detail-item">
                          <i className="icon-material-outline-date-range"></i>{" "}
                          12 Jan, 2021 - 11:00 AM
                        </div>
                        <div
                          className="utf-star-rating"
                          data-rating="5.0"
                        ></div>
                      </div>
                      <div className="utf-item-description">
                        <p>
                          Lorem Ipsum is simply dummy text of printing and type
                          setting. Lorem Ipsum been industry standard dummy text
                          ever when unknown printer took a galley type
                          scrambled.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <ul>
                  <li>
                    <div className="utf-boxed-list-item-item">
                      <div className="item-content">
                        <h4>
                          John Williams{" "}
                          <span>Web Developer and PHP Developer</span>
                        </h4>
                        <a href="#" className="reply">
                          <i className="icon-line-awesome-reply-all"></i> Reply
                        </a>
                        <div className="item-details margin-top-10">
                          <div className="utf-detail-item">
                            <i className="icon-material-outline-date-range"></i>{" "}
                            12 Jan, 2021 - 04:00 PM
                          </div>
                          <div
                            className="utf-star-rating"
                            data-rating="5.0"
                          ></div>
                        </div>
                        <div className="utf-item-description">
                          <p>
                            Lorem Ipsum is simply dummy text of printing and
                            type setting. Lorem Ipsum been industry standard
                            dummy text ever when unknown printer took scrambled.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="utf-boxed-list-item-item">
                      <div className="item-content">
                        <h4>
                          John Williams{" "}
                          <span>Web Developer and PHP Developer</span>
                        </h4>
                        <a href="#" className="reply">
                          <i className="icon-line-awesome-reply-all"></i> Reply
                        </a>
                        <div className="item-details margin-top-10">
                          <div className="utf-detail-item">
                            <i className="icon-material-outline-date-range"></i>{" "}
                            12 Jan, 2021 - 04:00 PM
                          </div>
                          <div
                            className="utf-star-rating"
                            data-rating="5.0"
                          ></div>
                        </div>
                        <div className="utf-item-description">
                          <p>
                            Lorem Ipsum is simply dummy text of printing and
                            type setting. Lorem Ipsum been industry standard
                            dummy text ever when unknown printer took scrambled.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <li>
                  <div className="utf-boxed-list-item-item">
                    <div className="item-content">
                      <h4>
                        John Williams <span>Software Developer</span>
                      </h4>
                      <a href="#" className="reply">
                        <i className="icon-line-awesome-reply-all"></i> Reply
                      </a>
                      <div className="item-details margin-top-10">
                        <div className="utf-detail-item">
                          <i className="icon-material-outline-date-range"></i>{" "}
                          12 Jan, 2021 - 11:00 AM
                        </div>
                        <div
                          className="utf-star-rating"
                          data-rating="5.0"
                        ></div>
                      </div>
                      <div className="utf-item-description">
                        <p>
                          Lorem Ipsum is simply dummy text of printing and type
                          setting. Lorem Ipsum been industry standard dummy text
                          ever when unknown printer took a galley type
                          scrambled.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="utf-boxed-list-item-item">
                    <div className="item-content">
                      <h4>
                        John Williams{" "}
                        <span>Web Developer and PHP Developer</span>
                      </h4>
                      <a href="#" className="reply">
                        <i className="icon-line-awesome-reply-all"></i> Reply
                      </a>
                      <div className="item-details margin-top-10">
                        <div className="utf-detail-item">
                          <i className="icon-material-outline-date-range"></i>{" "}
                          12 Jan, 2021 - 04:00 PM
                        </div>
                        <div
                          className="utf-star-rating"
                          data-rating="5.0"
                        ></div>
                      </div>
                      <div className="utf-item-description">
                        <p>
                          Lorem Ipsum is simply dummy text of printing and type
                          setting. Lorem Ipsum been industry standard dummy text
                          ever when unknown printer took a galley type
                          scrambled.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="utf-centered-button margin-top-35">
                {" "}
                <a
                  href="#small-dialog"
                  className="popup-with-zoom-anim button utf-button-sliding-icon"
                >
                  Leave Your Review{" "}
                  <i className="icon-feather-chevron-right"></i>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
