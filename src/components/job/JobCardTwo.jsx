const JobCardTwo = () => {
  return (
    <a href="single-job-page.html" className="utf-job-listing">
      <div className="utf-job-listing-details">
        <div className="utf-job-listing-company-logo">
          {" "}
          <img src="images/company_logo_1.png" alt="" />{" "}
        </div>
        <div className="utf-job-listing-description">
          <span className="dashboard-status-button utf-job-status-item green">
            <i className="icon-material-outline-business-center"></i> Full Time
          </span>
          <h3 className="utf-job-listing-title">
            Web Designer, Graphic Designer, UI/UX Designer & Art{" "}
            <span
              className="utf-verified-badge"
              title="Verified Employer"
              data-tippy-placement="top"
            ></span>
          </h3>
          <div className="utf-job-listing-footer">
            <ul>
              <li>
                <i className="icon-feather-briefcase"></i> Software Developer
              </li>
              <li>
                <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                $35000-$38000
              </li>
              <li>
                <i className="icon-material-outline-location-on"></i> Drive
                Potsdam, NY 676
              </li>
              <li>
                <i className="icon-material-outline-access-time"></i> 15 Minute
                Ago
              </li>
            </ul>
          </div>
        </div>
        <span className="bookmark-icon"></span>
      </div>
    </a>
  );
};

export default JobCardTwo;
