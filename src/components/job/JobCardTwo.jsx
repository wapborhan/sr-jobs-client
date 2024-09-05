import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const JobCardTwo = ({ job }) => {
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { title, salaryRange, deadline, _id, categories, jobType, companyInf } =
    job;

  const handleBookmark = (data) => {
    setActive(!active);
    if (active) {
      axiosPublic
        .delete(
          `bookmark/${data.jobId}?email=${encodeURIComponent(user?.email)}`
        )
        .then((res) => {
          console.log(res.data.message);
          toast(res.data.message);
        })
        .catch((err) => console.error(err));
    } else {
      axiosPublic
        .post(`bookmark`, data)
        .then((res) => {
          console.log(res.data.message);
          toast(res.data.message);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    axiosPublic
      .get(`http://localhost:3300/bookmark?email=${user?.email}`)
      .then((res) => {
        const existBookmark = res.data.some((mark) => mark.jobId?._id === _id);
        setActive(existBookmark);

        console.log(existBookmark);
      })
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="utf-job-listing">
      <div className="utf-job-listing-details">
        <div className="utf-job-listing-company-logo">
          <Link to={`/company/${companyInf?._id}`}>
            <img src={companyInf?.compLogoUrl} alt="" />
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
            <Link to={`/job/${_id}`}>{title}</Link>
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
                <i className="icon-material-outline-access-time"></i>{" "}
                {moment(deadline).fromNow()}
              </li>
            </ul>
          </div>
        </div>
        <span
          onClick={() =>
            handleBookmark({
              jobId: _id,
              bookmarkerEmail: user?.email,
              markDate: new Date(),
            })
          }
          className={`bookmark-icon ${active ? "bookmarked" : ""}`}
        ></span>
      </div>
    </div>
  );
};

export default JobCardTwo;
