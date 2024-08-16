import { Link } from "react-router-dom";
import CatCard from "../../../components/job/CatCard";
import useFormData from "../../../hooks/useFormData";

const Categories = () => {
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
            categoriesList.map((cat) => {
              return <CatCard key={cat.label} cat={cat} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
