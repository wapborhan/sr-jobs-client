import Loader from "../shared/Loader";
import JobCardTwo from "./JobCardTwo";

const JobRightSide = ({ jobs, loading, active, handleBookmark }) => {
  return (
    <>
      <div className="utf-inner-search-section-title">
        <h4>
          <i className="icon-material-outline-search"></i> Search Jobs Listing
          Results
        </h4>
      </div>
      <div className="utf-notify-box-aera margin-top-15">
        <div className="utf-switch-container-item">
          <span>Showing 1–10 of {jobs.length} Jobs Results :</span>
        </div>
        <div className="sort-by">
          <span>Sort By:</span>
          <select className="selectpicker hide-tick">
            <option>A to Z</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Random</option>
          </select>
        </div>
      </div>
      <div className="utf-listings-container-part compact-list-layout margin-top-35">
        {loading ? (
          <Loader />
        ) : jobs.length > 0 ? (
          jobs
            .slice(0, 15)
            .map((job, idx) => (
              <JobCardTwo
                key={idx}
                job={job}
                active={active}
                handleBookmark={handleBookmark}
              />
            ))
        ) : (
          "No Job Found."
        )}
      </div>
      <div className="clearfix"></div>
      <div className="row">
        <div className="col-md-12">
          <div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
            <nav className="pagination">
              <ul>
                <li className="utf-pagination-arrow">
                  <a href="#">
                    <i className="icon-material-outline-keyboard-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="current-page">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li className="utf-pagination-arrow">
                  <a href="#">
                    <i className="icon-material-outline-keyboard-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRightSide;
