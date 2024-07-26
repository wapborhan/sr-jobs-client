import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const { _id, compName, compLogoUrl, compCategories, compAdress } = company;
  console.log(company);
  return (
    <div className="col-xl-4 col-md-6 col-sm-12">
      <div className="utf-company-inner-alignment">
        <div className="company">
          <div className="featured-type featured">Featured</div>
          <span className="company-logo">
            <img src={compLogoUrl} alt="" />
          </span>
          <Link to={`/company/${_id}`}>
            <h4>{compName}</h4>
          </Link>
          <h5 className="utf-job-listing-company">
            <span>
              <i className="icon-feather-briefcase"></i> {compCategories}
            </span>
          </h5>
          <p className="text-muted">
            <i className="icon-material-outline-location-on"></i> {compAdress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
