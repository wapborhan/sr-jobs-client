const JobDetailsDesc = ({ job }) => {
  const {
    jobsDescription,
    image,
    educationQualification,
    skillsAbilities,
    locMapLink,
  } = job;
  return (
    <div className="col-xl-8 col-lg-8 utf-content-right-offset-aera">
      <div className="utf-single-page-section-aera">
        <div className="job-description-image-aera">
          <img src={image} alt="" />
        </div>
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-material-outline-description"></i> Jobs
            Description
          </h3>
        </div>
        {jobsDescription}
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
              Get Job Alerts <i className="icon-feather-chevron-right"></i>
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
            <i className="icon-feather-briefcase"></i> Education Qualification
          </h3>
        </div>
        <p>{educationQualification}</p>
        {/* <ul className="utf-job-deatails-content-item">
          <li>
            <i className="icon-feather-arrow-right"></i> Morbi mattis
            ullamcorper velit. Phasellus gravida semper nisi nullam vel sem.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Phasellus viverra nulla
            ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Etiam ultricies nisi
            vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
            rhoncus.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Donec mollis hendrerit
            risus. Phasellus nec sem in justo pellentesque facilisis.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Praesent congue erat at
            massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Donec elit libero,
            sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Pellentesque auctor
            neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod
            ut, mi.
          </li>
          <li>
            <i className="icon-feather-arrow-right"></i> Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
          </li>
        </ul> */}
      </div>

      <div className="utf-single-page-section-aera">
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-material-outline-business-center"></i> Required
            Skills and Abilities
          </h3>
        </div>
        {skillsAbilities}
      </div>

      <div className="utf-single-page-section-aera">
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-material-outline-location-on"></i> Jobs Location
          </h3>
        </div>
        <div id="utf-single-job-map-container-item">
          {locMapLink}
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
            <i className="icon-material-outline-business-center"></i> People
            Also Viewed
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
                  <i className="icon-material-outline-business-center"></i> Full
                  Time
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
                      <i className="icon-material-outline-access-time"></i> 15
                      Minute Ago
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
                  <i className="icon-material-outline-business-center"></i> Full
                  Time
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
                      <i className="icon-material-outline-access-time"></i> 30
                      Minute Ago
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
                  <i className="icon-material-outline-business-center"></i> Full
                  Time
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
                      <i className="icon-material-outline-access-time"></i> 55
                      Minute Ago
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
                  <i className="icon-material-outline-business-center"></i> Part
                  Time
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
                      <i className="icon-material-outline-access-time"></i> 1
                      Days Ago
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
  );
};

export default JobDetailsDesc;
