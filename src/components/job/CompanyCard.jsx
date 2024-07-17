import { Link } from "react-router-dom";

const CompanyCard = () => {
  return (
    <div className="col-xl-4 col-md-6 col-sm-12">
      <div className="utf-company-inner-alignment">
        <div className="company">
          <div className="featured-type featured">Featured</div>
          <span className="dashboard-status-button utf-job-status-item green">
            <i className="icon-material-outline-business-center"></i> Full Time
          </span>
          <span className="company-logo">
            <img src="images/company_logo_1.png" alt="" />
          </span>
          <Link to="/company/1">
            <h4>G Technicals Solutions</h4>
          </Link>
          <h5 className="utf-job-listing-company">
            <span>
              <i className="icon-feather-briefcase"></i> Web Designer, Web
              Developers
            </span>
          </h5>
          <p className="text-muted">
            <i className="icon-material-outline-location-on"></i> 2767 Concord
            Street, Charlotte
          </p>
          <div className="utf-star-rating" data-rating="4.5"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
