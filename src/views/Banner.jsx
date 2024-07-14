const Banner = () => {
  document.title = "SR Jobs | Homepage";

  return (
    <div
      className="intro-banner"
      data-background-image="images/home-background-03.jpg"
      style={{ backgroundImage: `url("images/home-background-03.jpg")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf-banner-headline-text-part">
              <h3>Change Your Career Starts Now!</h3>
              <span>
                Find Jobs, Employment & Career Making Over 100,000 Applications
                Every Day.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="utf-intro-banner-search-form-block margin-top-40">
              <div className="utf-intro-search-field-item">
                <input
                  id="intro-keywords"
                  type="text"
                  placeholder="Search Jobs Keywords..."
                />
                <i className="icon-feather-search"></i>
              </div>
              <div className="utf-intro-search-field-item">
                <select
                  className="selectpicker default"
                  data-live-search="true"
                  data-selected-text-format="count"
                  data-size="5"
                  title="Select Location"
                >
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Brazil</option>
                  <option>Burundi</option>
                  <option>Bulgaria</option>
                  <option>Germany</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Iceland</option>
                </select>
              </div>
              <div className="utf-intro-search-button">
                <button
                  className="button ripple-effect"
                  // onclick="window.location.href='jobs-list-layout-leftside.html'"
                >
                  <i className="icon-material-outline-search"></i> Search Jobs
                </button>
              </div>
            </div>
            <p className="utf-trending-silver-item">
              <span className="utf-trending-black-item">
                Trending Jobs Keywords:
              </span>
              <a href="#">Web Designer</a> <a href="#">Web Developer</a>
              <a href="#">Graphic Designer</a> <a href="#">PHP Developer</a>
              <a href="#">IOS Developer</a> <a href="#">Android Developer</a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="main_popular_categories">
              <ul className="main_popular_categories_list">
                <li>
                  <a href="listings_grid_with_sidebar.html">
                    <div className="utf_box">
                      <i className="icon-line-awesome-laptop"></i>
                      <p>IT Engineer</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="listings_grid_with_sidebar.html">
                    <div className="utf_box">
                      <i className="icon-feather-pie-chart"></i>
                      <p>Marketing</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="listings_grid_with_sidebar.html">
                    <div className="utf_box">
                      <i className="icon-line-awesome-bank"></i>
                      <p>Banking</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="listings_grid_with_sidebar.html">
                    <div className="utf_box">
                      <i className="icon-line-awesome-medkit"></i>
                      <p>Health Care</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="listings_grid_with_sidebar.html">
                    <div className="utf_box">
                      <i className="icon-line-awesome-cubes"></i>
                      <p>Design & Art</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
