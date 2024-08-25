import moment from "moment";
import { Link } from "react-router-dom";

const JobCardOne = ({ job }) => {
  const {
    _id,
    title,
    salary,
    postingDate,
    categories,
    location,
    jobType,
    companyInf,
    deadline,
  } = job;

  return (
    <>
      <div className="utf-job-listing utf-apply-button-item">
        <div className="utf-job-listing-details">
          <div className="utf-job-listing-company-logo">
            <Link to={`/company/${companyInf?._id}`}>
              <img src={companyInf?.compLogoUrl} alt="" />
            </Link>
          </div>
          <div className="utf-job-listing-description">
            <span className="dashboard-status-button utf-job-status-item green">
              <i className="icon-material-outline-business-center"></i>
              {jobType}
            </span>
            <h3 className="utf-job-listing-title">{title}</h3>
            <div className="utf-job-listing-footer">
              <ul>
                <li>
                  <i className="icon-feather-briefcase"></i> {categories}
                </li>
                <li>
                  <i className="icon-material-outline-account-balance-wallet"></i>
                  {salary}
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>
                  {location}
                </li>
                <li>
                  <i className="icon-material-outline-access-time"></i>
                  {" Deadline: "}
                  {moment(deadline).fromNow()}
                </li>
              </ul>
            </div>
          </div>
          <Link to={`/job/${_id}`}>
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
