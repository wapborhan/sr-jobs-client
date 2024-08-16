import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
  const { label, value, icon, image } = cat;
  return (
    <div className="col-xl-3 col-md-6 col-lg-4">
      <Link
        to={`/job?text=&cat=${value}`}
        className="photo-box photo-category-box small"
        style={{
          background: `url("${image}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="utf-opening-position-counter-item">10 Openings</div> */}
        <div className="utf-opening-box-content-part">
          <div className="utf-category-box-icon-item">
            <i className={icon}></i>
          </div>
          <h3>{label}</h3>
          {/* <span>2,612 Jobs</span> */}
        </div>
      </Link>
    </div>
  );
};

export default CatCard;
