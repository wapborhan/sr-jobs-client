import CompanyCard from "../../../components/dashboard/CompanyCard";
import useCompany from "../../../hooks/useCompany";

const ViewCompany = () => {
  const [allCompany] = useCompany();

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>Company Listings</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                {allCompany.length > 0
                  ? allCompany.map((company, idx) => {
                      return <CompanyCard key={idx} company={company} />;
                    })
                  : "Loading"}
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

export default ViewCompany;
