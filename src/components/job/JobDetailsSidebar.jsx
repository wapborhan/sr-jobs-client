const JobDetailsSidebar = ({ jobs }) => {
  const {
    salaryRange,
    vacancy,
    gender,
    experience,
    jobType,
    qualification,
    postedDate,
    deadline,
    location,
  } = jobs;

  return (
    <div className="col-xl-4 col-lg-4">
      <div className="utf-sidebar-container-aera">
        <div className="utf-sidebar-widget-item">
          <h3>Offered Salary</h3>
          <div className="utf-right-side">
            <div className="salary-box">
              <div className="salary-amount">{salaryRange}</div>
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
                  <h5>{vacancy}</h5>
                </li>
                <li>
                  <i className="icon-material-outline-account-circle"></i>{" "}
                  <span>Gender</span>
                  <h5>{gender}</h5>
                </li>
                <li>
                  <i className="icon-line-awesome-glass"></i>{" "}
                  <span>Experience</span>
                  <h5>{experience}</h5>
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>{" "}
                  <span>Location</span>
                  <h5>{location}</h5>
                </li>
                <li>
                  <i className="icon-material-outline-business-center"></i>{" "}
                  <span>Jobs Type</span>
                  <h5>{jobType}</h5>
                </li>
                <li>
                  <i className="icon-line-awesome-gg-circle"></i>{" "}
                  <span>Qualification</span>
                  <h5>{qualification}</h5>
                </li>
                <li>
                  <i className="icon-material-outline-access-time"></i>{" "}
                  <span>Date Posted</span>
                  <h5>{postedDate}</h5>
                </li>
                <li>
                  <i className="icon-material-outline-access-time"></i>{" "}
                  <span>Deadline</span>
                  <h5>{deadline}</h5>
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
          <h3>Bookmark Jobs</h3>
          <p className="bookmark-text-item">950 People Bookmarked Jobs</p>
          <button className="bookmark-button margin-bottom-10">
            {" "}
            <span className="bookmark-icon"></span>{" "}
            <span className="bookmark-text">Login to Bookmark Jobs</span>{" "}
            <span className="bookmarked-text">Login to Bookmark Jobs</span>{" "}
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
  );
};

export default JobDetailsSidebar;
