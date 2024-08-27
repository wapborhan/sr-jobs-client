import CompanyCard from "../../../components/job/CompanyCard";
import TitleBar from "../../../components/shared/TitleBar";
import useCompany from "../../../hooks/useCompany";

const Company = () => {
  const [allCompany] = useCompany();

  return (
    <>
      <TitleBar title="All Company" subtitle="Company" />
      <div className="container">
        <div className="row">
          <div className="utf-companies-list-aera">
            <div className="col-xl-12">
              <div className="row">
                {allCompany.map((company, idx) => {
                  return <CompanyCard company={company} key={idx} />;
                })}
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
    </>
  );
};

export default Company;
