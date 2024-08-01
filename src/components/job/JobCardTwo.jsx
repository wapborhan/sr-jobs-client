import moment from "moment";
import { Link } from "react-router-dom";

const JobCardTwo = ({ job }) => {
  const {
    title,
    salaryRange,
    postingDate,
    image,
    _id,
    location,
    categories,
    jobType,
    companyId,
  } = job;
  // console.log(job);
  return (
    <div className="utf-job-listing">
      <div className="utf-job-listing-details">
        <div className="utf-job-listing-company-logo">
          <Link to={`/company/${companyId}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="utf-job-listing-description">
          <span
            className={`dashboard-status-button utf-job-status-item ${
              jobType === "Full Time" ? "green" : "yellow"
            }`}
          >
            <i className="icon-material-outline-business-center"></i> {jobType}
          </span>
          <h3 className="utf-job-listing-title">
            <Link to={_id}>{title}</Link>

            {/* <span
              className="utf-verified-badge"
              title="Verified Employer"
              data-tippy-placement="top"
            ></span> */}
          </h3>
          <div className="utf-job-listing-footer">
            <ul>
              <li>
                <i className="icon-feather-briefcase"></i> {categories}
              </li>
              <li>
                <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                {salaryRange}
              </li>
              <li>
                <i className="icon-material-outline-location-on"></i> {location}
              </li>
              <li>
                <i className="icon-material-outline-access-time"></i>{" "}
                {moment(postingDate).format("dddd, MMMM Do YYYY, ")}
              </li>
            </ul>
          </div>
        </div>
        <span className="bookmark-icon"></span>
      </div>
    </div>
  );
};

export default JobCardTwo;
