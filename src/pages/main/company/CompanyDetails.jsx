import { Link, useLoaderData } from "react-router-dom";
import JobCardTwo from "../../../components/job/JobCardTwo";
import useCompanyWiseJob from "../../../hooks/useCompanyWiseJob";
import CompanyReview from "./CompanyReview";

const CompanyDetails = () => {
  const companyData = useLoaderData();
  const {
    compName,
    compLogoUrl,
    compCategories,
    compAdress,
    compWebsite,
    compEmail,
    compDetails,
    _id,
  } = companyData;
  const country = compAdress.split(",").slice(-1)[0];
  const [compWiseJob] = useCompanyWiseJob(_id);
  return (
    <>
      <div
        className="single-page-header"
        data-background-image="/images/single-company.jpg"
        style={{
          backgroundImage: `url("/images/single-company.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf-single-page-header-inner-aera">
                <div className="utf-left-side">
                  <div className="utf-header-image">
                    <img src={compLogoUrl} alt="" />
                  </div>
                  <div className="utf-header-details">
                    <ul>
                      <li>
                        {country}{" "}
                        <img
                          className="flag"
                          src="/images/flags/us.svg"
                          alt=""
                          title="USA"
                          data-tippy-placement="top"
                        />
                      </li>
                    </ul>
                    <h3>
                      {compName}
                      <span
                        className="utf-verified-badge"
                        title="Verified"
                        data-tippy-placement="top"
                      ></span>
                    </h3>
                    <h4 className="text-muted">
                      <i className="icon-material-outline-business-center"></i>{" "}
                      {compCategories}
                    </h4>
                    <h4 className="text-muted">
                      <i className="icon-material-outline-email"></i>{" "}
                      {compEmail}
                    </h4>
                    <h5>
                      <i className="icon-material-outline-location-on"></i>{" "}
                      {compAdress}
                    </h5>
                    {/* <div className="utf-star-rating" data-rating="4.9"></div> */}
                  </div>
                </div>
                <div className="utf-right-side">
                  <div className="salary-box">
                    <Link
                      to={`${compWebsite}`}
                      className="apply-now-button popup-with-zoom-anim margin-top-0"
                    >
                      Website
                      <i className="icon-feather-chevron-right"></i>
                    </Link>
                    <span className="button save-job-btn margin-top-20">
                      Save Company
                      <i className="icon-feather-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 utf-content-right-offset-aera">
            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-feather-info"></i> About Company Details
                </h3>
              </div>
              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: compDetails }}
              />
            </div>

            <div className="utf-boxed-list-item margin-bottom-30">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i> Open
                  Jobs Position List
                </h3>
              </div>
              <div className="utf-listings-container-part compact-list-layout">
                {compWiseJob.slice(0, 3).map((job) => {
                  return <JobCardTwo job={job} key={job?._id} />;
                })}
              </div>
            </div>

            {/* <CompanyReview /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
