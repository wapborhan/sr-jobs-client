import { useLoaderData } from "react-router-dom";
import JobCard from "../../../components/dashboard/JobCard";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ViewJobs = () => {
  const loadJobs = useLoaderData();
  const [allJobs, setAllJobs] = useState(loadJobs);
  const [dummyState, setDummyState] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/job/${id}`)
          .then((res) => {
            const updatedData = allJobs.filter((item) => item._id !== id);
            setAllJobs(updatedData);
            setDummyState(!dummyState); // Force re-render
            Swal.fire({
              title: "Deleted!",
              text: `Your Job "${res?.data?.title}" has been deleted.`,
              icon: "success",
            });
          })
          .catch((err) => {
            console.error("Delete failed, error:", err);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting the job.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>My Jobs Listings</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                {allJobs &&
                  allJobs.map((job) => {
                    return (
                      <JobCard
                        key={job._id}
                        job={job}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="utf-pagination-container-aera margin-top-20 margin-bottom-0">
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
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
