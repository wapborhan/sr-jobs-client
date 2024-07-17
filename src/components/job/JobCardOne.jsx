import { Link } from "react-router-dom";

const JobCardOne = () => {
  return (
    <>
      <div
        href="single-job-page.html"
        className="utf-job-listing utf-apply-button-item"
      >
        <div className="utf-job-listing-details">
          <div className="utf-job-listing-company-logo">
            <img src="images/company_logo_1.png" alt="" />
          </div>
          <div className="utf-job-listing-description">
            <span className="dashboard-status-button utf-job-status-item green">
              <i className="icon-material-outline-business-center"></i>
              Full Time
            </span>
            <h3 className="utf-job-listing-title">
              Web Designer, Graphic Designer, UI/UX Designer & Art
            </h3>
            <div className="utf-job-listing-footer">
              <ul>
                <li>
                  <i className="icon-feather-briefcase"></i> Graphic Designer
                </li>
                <li>
                  <i className="icon-material-outline-account-balance-wallet"></i>
                  $35000-$38000
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>
                  Drive Potsdam, NY 676
                </li>
                <li>
                  <i className="icon-material-outline-access-time"></i> 15
                  Minute Ago
                </li>
              </ul>
            </div>
          </div>
          <Link to={`/job/1`}>
            <span className="list-apply-button ripple-effect">
              Browse Job <i className="icon-line-awesome-bullhorn"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobCardOne;
