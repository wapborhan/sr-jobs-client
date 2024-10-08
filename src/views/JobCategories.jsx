import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import CatCard from "../components/job/CatCard";

const JobCategories = () => {
  const [categoriesList] = useFormData();

  return (
    <div className="section margin-top-60 margin-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
              <span>Jobs Categories</span>
              <h3>Choose Your Sector</h3>
              <div className="utf-headline-display-inner-item">
                Jobs Categories
              </div>
              <p className="utf-slogan-text">
                Lorem Ipsum is simply dummy text printing and type setting
                industry Lorem Ipsum been industry standard dummy text ever
                since when unknown printer took a galley.
              </p>
            </div>
          </div>
          {categoriesList &&
            categoriesList.slice(0, 8).map((cat) => {
              return <CatCard key={cat.label} cat={cat} />;
            })}

          <div className="col-xl-12 utf-centered-button margin-top-10">
            <Link
              to="/jobs-categorie"
              className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
            >
              View All Categories <i className="icon-feather-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
