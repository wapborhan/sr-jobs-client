import { Link } from "react-router-dom";
import useSingleCompany from "../../hooks/useSingleCompany";

const JobDetailsHead = ({ job }) => {
  const { companyId, jobType, title, categories, deadline } = job;
  const [singleCompany] = useSingleCompany(companyId);

  const { compLogoUrl, compAdress, _id, compName } = singleCompany;
  const country = compAdress && compAdress.split(",").slice(-1)[0];
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
                  <Link to={`/company/${_id}`}>
                    <img src={compLogoUrl} alt={compName} />
                  </Link>
                </div>
                <div className="utf-header-details">
                  <span className="dashboard-status-button utf-job-status-item green">
                    <i className="icon-material-outline-business-center"></i>{" "}
                    {jobType}
                  </span>
                  <ul>
                    <li>
                      {compAdress && country}{" "}
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
                    {title}
                    <span
                      className="utf-verified-badge"
                      title="Verified"
                      data-tippy-placement="top"
                    ></span>
                  </h3>
                  <h5>
                    <i className="icon-material-outline-business-center"></i>{" "}
                    {categories}
                  </h5>
                  <h5>
                    <i className="icon-material-outline-business-center"></i>{" "}
                    {deadline}
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
