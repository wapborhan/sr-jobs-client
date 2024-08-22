import Swal from "sweetalert2";
import CompanyCard from "../../../components/dashboard/CompanyCard";
import useCompany from "../../../hooks/useCompany";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Loader from "../../../components/shared/Loader";

const ViewCompany = () => {
  const [allCompany, isLoading] = useCompany();
  const [companys, setCompanys] = useState(allCompany);
  const [dummyState, setDummyState] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!isLoading) {
      setCompanys(allCompany);
    }
  }, [allCompany, isLoading]);

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
          .delete(`/company/${id}`)
          .then((res) => {
            const updatedData = allCompany.filter((item) => item._id !== id);
            setCompanys(updatedData);
            setDummyState(!dummyState); // Force re-render
            Swal.fire({
              title: "Deleted!",
              text: `Your Company "${res?.data?.compName}" has been deleted.`,
              icon: "success",
            });
          })
          .catch((err) => {
            console.error("Delete failed, error:", err);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting the Company.",
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
              <h3>Company Listings</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                {isLoading ? (
                  <Loader />
                ) : companys.length > 0 ? (
                  companys.map((company, idx) => {
                    return (
                      <CompanyCard
                        key={idx}
                        company={company}
                        handleDelete={handleDelete}
                      />
                    );
                  })
                ) : (
                  <div style={{ padding: "40px", margin: "0 auto" }}>
                    No Company Found.
                  </div>
                )}
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
