import { Link } from "react-router-dom";
import AppliedCard from "../../../components/job/AppliedCard";
import useAppliedJob from "../../../hooks/useAppliedJob";
import useLoginUser from "../../../hooks/useLoginUser";

const AppliedJobs = () => {
  const [loggedInUser] = useLoginUser();
  const [appliedJob] = useAppliedJob(loggedInUser?._id);

  return (
    <div className="utf-dashboard-content-container-aera" data-simplebar>
      <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
        <div className="row">
          <div className="col-xl-12">
            <h3>Manage Resume</h3>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/home">Dashboard</Link>
                </li>
                <li>Manage Resume</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="utf-dashboard-content-inner-aera">
        <div className="row">
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">
              <div className="headline">
                <h3>Manage Resume List</h3>
              </div>
              <div className="content">
                <ul className="utf-dashboard-box-list">
                  {appliedJob &&
                    appliedJob.map((job) => (
                      <AppliedCard job={job} key={job._id} />
                    ))}
                </ul>
              </div>
            </div>
            {/* <!-- Pagination --> */}
            <div className="clearfix"></div>
            {/* <div className="utf-pagination-container-aera margin-top-20 margin-bottom-0">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow">
                    <a href="#" className="ripple-effect">
                      <i className="icon-material-outline-keyboard-arrow-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ripple-effect current-page">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ripple-effect">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ripple-effect">
                      3
                    </a>
                  </li>
                  <li className="utf-pagination-arrow">
                    <a href="#" className="ripple-effect">
                      <i className="icon-material-outline-keyboard-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
