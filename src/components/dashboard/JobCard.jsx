import { Link } from "react-router-dom";

const JobCard = ({ job, handleDelete }) => {
  const {
    _id,
    companyInf,
    title,
    jobType,
    categories,
    deadline,
    salaryRange,
    location,
  } = job;

  return (
    <li>
      <div className="utf-job-listing">
        <div className="utf-job-listing-details">
          <Link
            to={`/company/${companyInf?._id}`}
            className="utf-job-listing-company-logo"
          >
            <img src={companyInf?.compLogoUrl} alt={companyInf?.compName} />
          </Link>
          <div className="utf-job-listing-description">
            <span className="dashboard-status-button utf-status-item green">
              Pending Approval
            </span>
            <h3 className="utf-job-listing-title">
              <Link to={`/job/${_id}`}>{title}</Link>
              <span className="dashboard-status-button green">
                <i className="icon-material-outline-business-center"></i>{" "}
                {jobType}
              </span>
            </h3>
            <div className="utf-job-listing-footer">
              <ul>
                <li>
                  <i className="icon-feather-briefcase"></i> {categories}
                </li>
                <li>
                  <i className="icon-material-outline-date-range"></i>{" "}
                  {deadline}
                </li>
                <li>
                  <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                  {salaryRange}
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>{" "}
                  {location}
                </li>
              </ul>
              <div className="utf-buttons-to-right">
                <Link
                  to={`/dashboard/jobs/edit/${_id}`}
                  className="button green ripple-effect ico"
                  title="Edit"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-edit"></i>
                </Link>
                <div
                  onClick={() => handleDelete(_id)}
                  className="button red ripple-effect ico cursor-pointer"
                  title="Remove"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-trash-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
