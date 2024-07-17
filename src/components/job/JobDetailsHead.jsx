const JobDetailsHead = () => {
  return (
    <div
      className="single-page-header"
      style={{ backgroundImage: `url("/images/single-job.jpg")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf-single-page-header-inner-aera">
              <div className="utf-left-side">
                <div className="utf-header-image">
                  <a href="single-company-profile.html">
                    <img src="/images/company_logo_1.png" alt="" />
                  </a>
                </div>
                <div className="utf-header-details">
                  <span className="dashboard-status-button utf-job-status-item green">
                    <i className="icon-material-outline-business-center"></i>{" "}
                    Full Time
                  </span>
                  <ul>
                    <li>
                      Afghanistan{" "}
                      <img
                        className="flag"
                        src="/images/flags/af.svg"
                        alt=""
                        title="Afghanistan"
                        data-tippy-placement="top"
                      />
                    </li>
                  </ul>
                  <h3>
                    Business Manager{" "}
                    <span
                      className="utf-verified-badge"
                      title="Verified"
                      data-tippy-placement="top"
                    ></span>
                  </h3>
                  <h5>
                    <i className="icon-material-outline-business-center"></i>{" "}
                    Web Designer
                  </h5>
                  <div className="utf-star-rating" data-rating="4.9"></div>
                </div>
              </div>
              <div className="utf-right-side">
                <div className="salary-box">
                  <a
                    href="#small-dialog"
                    className="apply-now-button popup-with-zoom-anim margin-top-0"
                  >
                    Apply For Jobs{" "}
                    <i className="icon-feather-chevron-right"></i>
                  </a>
                  <a href="#" className="button save-job-btn margin-top-20">
                    Save For Jobs <i className="icon-feather-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsHead;
