const JobLeftSide = () => {
  return (
    <div className="utf-sidebar-container-aera">
      <div className="utf-sidebar-widget-item">
        <h3>Search Keywords</h3>
        <div className="utf-input-with-icon">
          <input type="text" placeholder="Search Keywords..." />
          <i className="icon-material-outline-search"></i>
        </div>
      </div>

      <div className="utf-sidebar-widget-item">
        <h3>Category</h3>
        <select
          className="selectpicker"
          data-live-search="true"
          // data-selected-text-htmlFormat="count"
          data-size="7"
          title="All Categories"
        >
          <option>Web Design</option>
          <option>Accountant</option>
          <option>Data Analytics</option>
          <option>Marketing</option>
          <option>Software Developing</option>
          <option>IT & Networking</option>
          <option>Translation</option>
          <option>Sales & Marketing</option>
        </select>
      </div>

      <div className="utf-sidebar-widget-item">
        <h3>Gender</h3>
        <select className="selectpicker" data-size="3" title="Gender">
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </div>

      <div className="utf-sidebar-widget-item">
        <h3>Job Type</h3>
        <div className="utf-radio-btn-list">
          <div className="checkbox">
            <input type="checkbox" id="chekcbox1" checked />
            <label htmlFor="chekcbox1">
              <span className="checkbox-icon"></span> Full Time Jobs
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox2" />
            <label htmlFor="chekcbox2">
              <span className="checkbox-icon"></span> Part Time Jobs
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox3" />
            <label htmlFor="chekcbox3">
              <span className="checkbox-icon"></span> Freelancer Jobs
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox4" />
            <label htmlFor="chekcbox4">
              <span className="checkbox-icon"></span> Internship Jobs
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox5" />
            <label htmlFor="chekcbox5">
              <span className="checkbox-icon"></span> Temporary Jobs
            </label>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="utf-sidebar-widget-item">
        <h3>Experince</h3>
        <div className="utf-radio-btn-list">
          <div className="checkbox">
            <input type="checkbox" id="chekcbox01" checked />
            <label htmlFor="chekcbox01">
              <span className="checkbox-icon"></span> 1Year to 2Year
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox02" />
            <label htmlFor="chekcbox02">
              <span className="checkbox-icon"></span> 2Year to 3Year
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox03" />
            <label htmlFor="chekcbox03">
              <span className="checkbox-icon"></span> 3Year to 4Year
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox04" />
            <label htmlFor="chekcbox04">
              <span className="checkbox-icon"></span> 4Year to 5Year
            </label>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="utf-sidebar-widget-item">
        <h3>Career Level</h3>
        <div className="utf-radio-btn-list">
          <div className="checkbox">
            <input type="checkbox" id="chekcbox001" checked />
            <label htmlFor="chekcbox001">
              <span className="checkbox-icon"></span> Intermediate
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox002" />
            <label htmlFor="chekcbox002">
              <span className="checkbox-icon"></span> Normal
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox003" />
            <label htmlFor="chekcbox003">
              <span className="checkbox-icon"></span> Special
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="chekcbox004" />
            <label htmlFor="chekcbox004">
              <span className="checkbox-icon"></span> Experienced
            </label>
          </div>
        </div>
      </div>

      <div className="utf-sidebar-widget-item">
        <h3>Hourly Rate</h3>
        <div className="margin-top-55"></div>
        <input
          className="range-slider"
          type="text"
          value=""
          data-slider-currency="$"
          data-slider-min="5000"
          data-slider-max="50000"
          data-slider-step="100"
          data-slider-value="[5000,40000]"
        />
      </div>

      <div className="utf-sidebar-widget-item">
        <h3>Skills</h3>
        <div className="utf-tags-container-item">
          <div className="tag">
            <input type="checkbox" id="tag1" />
            <label htmlFor="tag1">HTML 5</label>
          </div>
          <div className="tag">
            <input type="checkbox" id="tag2" />
            <label htmlFor="tag2">Javascript</label>
          </div>
          <div className="tag">
            <input type="checkbox" id="tag3" />
            <label htmlFor="tag3">Web Design</label>
          </div>
          <div className="tag">
            <input type="checkbox" id="tag4" />
            <label htmlFor="tag4">Graphic Designer</label>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="utf-sidebar-widget-item">
        <div className="utf-detail-banner-add-section">
          <a href="#">
            <img src="images/banner-add-2.jpg" alt="banner-add-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobLeftSide;
