import { Link } from "react-router-dom";

const TitleBar = ({ title, subtitle }) => {
  return (
    <div id="titlebar" className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{title}</h2>
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{subtitle}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
