import { Link } from "react-router-dom";

const CompanyCard = ({ company, handleDelete }) => {
  const {
    _id,
    compAdress,
    compCategories,
    compLogoUrl,
    compName,
    compEmail,
    compWebsite,
  } = company;

  // console.log(company);
  const country = compAdress.split(",").slice(-1)[0];
  return (
    <li>
      <div className="utf-job-listing">
        <div className="utf-job-listing-details">
          <Link to={`/company/${_id}`} className="utf-job-listing-company-logo">
            <img src={compLogoUrl} alt="" />
          </Link>
          <div className="utf-job-listing-description">
            <span className="dashboard-status-button utf-status-item green">
              {country}
            </span>
            <h3 className="utf-job-listing-title">
              <Link to={`/company/${_id}`}>{compName}</Link>
            </h3>
            <div className="utf-job-listing-footer">
              <ul>
                <li>
                  <i className="icon-feather-briefcase"></i> {compCategories}
                </li>
                <li>
                  <i className="icon-material-outline-date-range"></i>{" "}
                  {compWebsite}
                </li>
                <li>
                  <i className="icon-material-outline-account-balance-wallet"></i>{" "}
                  {compEmail}
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>{" "}
                  {compAdress}
                </li>
              </ul>
              <div className="utf-buttons-to-right">
                <Link
                  to={`/dashboard/company/edit/${_id}`}
                  className="button green ripple-effect ico"
                  title="Edit"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-edit"></i>
                </Link>
                <a
                  onClick={() => handleDelete(_id)}
                  className="button red ripple-effect ico"
                  title="Remove"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-trash-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CompanyCard;
