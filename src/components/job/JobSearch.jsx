const JobSearch = ({ searchQuery, handleSearch }) => {
  return (
    <div className="inner_search_block_section padding-top-0 padding-bottom-40">
      <div className="container">
        <div className="col-md-12">
          <div className="utf-intro-banner-search-form-block">
            <div className="utf-intro-search-field-item">
              <i className="icon-feather-search"></i>
              <input
                id="intro-keywords"
                type="text"
                placeholder="Search Jobs Keywords..."
                defaultValue={searchQuery}
                onChange={handleSearch}
              />
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
                <i className="icon-material-outline-search"></i> Search
              </button>
            </div>
          </div>
          <p className="utf-trending-silver-item">
            <span className="utf-trending-black-item">
              Trending Jobs Keywords:
            </span>{" "}
            Web Designer, Web Developer, Graphic Designer, PHP Developer, IOS
            Developer, Android Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
