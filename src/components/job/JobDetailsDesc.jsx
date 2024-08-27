import { Link } from "react-router-dom";
import useCompanyWiseJob from "../../hooks/useCompanyWiseJob";
import JobCardTwo from "./JobCardTwo";

const JobDetailsDesc = ({ job }) => {
  const { jobsDescription, skillsAbilities, companyInf } = job;
  const [compWiseJob] = useCompanyWiseJob(companyInf?._id);

  return (
    <div className="col-xl-8 col-lg-8 utf-content-right-offset-aera">
      <div className="utf-single-page-section-aera">
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-material-outline-description"></i> Jobs
            Description
          </h3>
        </div>
        <div
          className="post__description"
          dangerouslySetInnerHTML={{ __html: jobsDescription }}
        />
        {skillsAbilities.length > 0 && (
          <div
            className="utf-single-page-section-aera"
            style={{ marginTop: "15px" }}
          >
            <div className="utf-boxed-list-headline-item">
              <h3>
                <i className="icon-material-outline-business-center"></i> Skills
                and Abilities
              </h3>
            </div>
            {skillsAbilities.map((skill) => {
              return (
                <>
                  <ul>
                    <li>{skill}</li>
                  </ul>
                </>
              );
            })}
          </div>
        )}

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <a
              href="#small-dialog"
              className="apply-now-button popup-with-zoom-anim margin-top-0"
            >
              Apply Now <i className="icon-feather-chevron-right"></i>
            </a>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <a href="#" className="button save-job-btn">
              Bookmark <i className="icon-feather-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="utf-detail-social-sharing margin-top-25">
          <span>
            <strong>Social Sharing:-</strong>
          </span>
          <ul className="margin-top-15">
            <li>
              <a href="#" title="Facebook" data-tippy-placement="top">
                <i className="icon-brand-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter" data-tippy-placement="top">
                <i className="icon-brand-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn" data-tippy-placement="top">
                <i className="icon-brand-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus" data-tippy-placement="top">
                <i className="icon-brand-google"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Whatsapp" data-tippy-placement="top">
                <i className="icon-brand-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Pinterest" data-tippy-placement="top">
                <i className="icon-brand-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="utf-boxed-list-item margin-bottom-60">
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-material-outline-business-center"></i> More Jobs
            This Company
          </h3>
        </div>
        <div className="utf-listings-container-part compact-list-layout">
          {compWiseJob.slice(0, 3).map((job) => {
            return <JobCardTwo job={job} key={job?._id} />;
          })}
        </div>
        <div className="utf-centered-button margin-top-10">
          {compWiseJob.length > 3 ? (
            <Link
              to={`/company/${companyInf?._id}`}
              className="button utf-button-sliding-icon"
            >
              View More Jobs <i className="icon-feather-chevron-right"></i>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsDesc;
