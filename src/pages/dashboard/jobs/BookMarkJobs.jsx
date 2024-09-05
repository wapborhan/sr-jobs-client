import { useEffect, useState, useCallback, useContext } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import JobCardTwo from "../../../components/job/JobCardTwo";
import useJobs from "../../../hooks/useJobs";
import { AuthContext } from "../../../Provider/AuthProvider";

const BookMarkJobs = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const { user } = useContext(AuthContext);
  const [allJobs] = useJobs({ jobCat: "all", jobSerch: "" });
  const axiosPublic = useAxiosPublic();

  const fetchBookmarks = useCallback(() => {
    axiosPublic
      .get(`/bookmark?email=${user?.email}`)
      .then((res) => {
        setBookmarks(res.data);
      })
      .catch((err) => console.error(err));
  }, [axiosPublic, user]);

  useEffect(() => {
    if (allJobs.length > 0) {
      fetchBookmarks();
    }
  }, [fetchBookmarks, allJobs]);

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>Bookmarked Jobs</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list padding-left-10 padding-right-10 padding-top-10 padding-bottom-10">
                {bookmarks.length > 0 ? (
                  bookmarks.map((job) => (
                    <JobCardTwo key={job._id} job={job?.jobId} />
                  ))
                ) : (
                  <p>No bookmarked jobs available.</p>
                )}
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
          {/* Pagination Logic */}
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
  );
};

export default BookMarkJobs;
