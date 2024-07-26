const JobSearch = ({ searchQuery, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log();
    handleSearch(e.target.searchData.value);
  };
  return (
    <div className="inner_search_block_section padding-top-0 padding-bottom-40">
      <div className="container">
        <div className="col-md-12">
          <form
            className="utf-intro-banner-search-form-block"
            onSubmit={handleSubmit}
          >
            <div className="utf-intro-search-field-item">
              <i className="icon-feather-search"></i>
              <input
                id="intro-keywords"
                type="text"
                placeholder="Search Jobs Keywords..."
                name="searchData"
                defaultValue={searchQuery}
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
              <button type="submit" className="button ripple-effect">
                <i className="icon-material-outline-search"></i> Search
              </button>
            </div>
          </form>
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
