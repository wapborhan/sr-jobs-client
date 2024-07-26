import CompanyCard from "../../../components/job/CompanyCard";
import useCompany from "../../../hooks/useCompany";

const Company = () => {
  const [allCompany] = useCompany();

  return (
    <div className="container">
      <div className="row">
        <div className="utf-companies-list-aera">
          <div className="col-xl-12">
            <div className="row">
              {allCompany.map((company, idx) => {
                return <CompanyCard company={company} key={idx} />;
              })}

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="utf-company-inner-alignment">
                  <a href="single-company-profile.html" className="company">
                    <span className="dashboard-status-button utf-job-status-item yellow">
                      <i className="icon-material-outline-business-center"></i>{" "}
                      Part Time
                    </span>
                    <span className="company-logo">
                      <img src="images/company_logo_8.png" alt="" />
                    </span>
                    <h4>Wisoky Dickens</h4>
                    <h5 className="utf-job-listing-company">
                      <span>
                        <i className="icon-feather-briefcase"></i> Web Designer,
                        Web Developers
                      </span>
                    </h5>
                    <p className="text-muted">
                      <i className="icon-material-outline-location-on"></i> 2767
                      Concord Street, Charlotte
                    </p>
                    <div className="utf-star-rating" data-rating="4.5"></div>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="utf-company-inner-alignment">
                  <a href="single-company-profile.html" className="company">
                    <div className="featured-type featured">Featured</div>
                    <span className="dashboard-status-button utf-job-status-item green">
                      <i className="icon-material-outline-business-center"></i>{" "}
                      Full Time
                    </span>
                    <span className="company-logo">
                      <img src="images/company_logo_9.png" alt="" />
                    </span>
                    <h4> Pro Acort Solutions</h4>
                    <h5 className="utf-job-listing-company">
                      <span>
                        <i className="icon-feather-briefcase"></i> Web Designer,
                        Web Developers
                      </span>
                    </h5>
                    <p className="text-muted">
                      <i className="icon-material-outline-location-on"></i> 2767
                      Concord Street, Charlotte
                    </p>
                    <span className="utf-company-not-rated">
                      3 Votes Required
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Pagination --> */}
          <div className="clearfix"></div>
          <div className="utf-pagination-container-aera margin-top-20 margin-bottom-40">
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

export default Company;
