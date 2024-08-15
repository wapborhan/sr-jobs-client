import { Link } from "react-router-dom";
import JobCardOne from "../components/job/JobCardOne";
import useJobs from "../hooks/useJobs";

const FeatureJob = () => {
  const [allJobs] = useJobs({ jobCat: "all", jobSerch: "" });
  return (
    <div className="section gray padding-top-60 padding-bottom-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
              <span>Jobs Listing</span>
              <h3>Features Jobs Post</h3>
              <div className="utf-headline-display-inner-item">
                Jobs Listing
              </div>
              <p className="utf-slogan-text">
                Lorem Ipsum is simply dummy text printing and type setting
                industry Lorem Ipsum been industry standard dummy text ever
                since when unknown printer took a galley.
              </p>
            </div>
            <div className="utf-listings-container-part compact-list-layout margin-top-35">
              {/*  */}
              {allJobs.length > 0
                ? allJobs.slice(0, 5).map((job, idx) => {
                    return <JobCardOne key={idx} job={job} />;
                  })
                : "No Job Found"}

              {/*  */}
            </div>
            <div className="utf-centered-button margin-top-10">
              <Link
                to="/job"
                className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20"
              >
                Browse All Jobs <i className="icon-feather-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;
