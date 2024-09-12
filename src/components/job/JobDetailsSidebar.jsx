import { Link } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import moment from "moment";

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

  const [categoriesList] = useFormData();

  return (
    <div className="col-xl-4 col-lg-4" style={{ position: "relative" }}>
      <div
        className="utf-sidebar-container-aera"
        style={{ position: "sticky", top: "100px" }}
      >
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
                  <h5>
                    {/* {deadline} */}
                    {moment(deadline).format("Do MMMM YYYY")}
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="utf-sidebar-widget-item">
          <h3>Categories Cloud</h3>
          <div className="task-tags">
            {categoriesList.map((cat) => {
              return (
                <Link to={`/job?text=&cat=${cat?.value}`} key={cat.label}>
                  <span>{cat?.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* <div className="utf-sidebar-widget-item">
          <h3>Print Job & Report Job</h3>
          <a href="#" className="button dark">
            Print Jobs <i className="icon-line-awesome-print"></i>
          </a>
          <a href="#" className="button dark">
            Report Jobs <i className="icon-feather-flag"></i>
          </a>
        </div> */}

        <div className="utf-sidebar-widget-item">
          <div className="utf-detail-banner-add-section">
            <Link to="https://www.srdreamlab.com" target="__Blank">
              <img src="/images/banner-add-2.jpg" alt="banner-add-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSidebar;
