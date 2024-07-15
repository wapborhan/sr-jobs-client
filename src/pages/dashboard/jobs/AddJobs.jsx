const AddJobs = () => {
  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>General Information</h3>
            </div>
            <div className="content with-padding padding-bottom-10">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>First Name</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Last Name</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Email Address</h5>
                    <input
                      type="email"
                      className="utf-with-border"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Phone Number</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Designation</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Designation"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Category</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-size="7"
                      title="Select Category"
                    >
                      <option>Accounting and Finance</option>
                      <option>Clerical & Data Entry</option>
                      <option>Counseling</option>
                      <option>Court Administration</option>
                      <option>Human Resources</option>
                      <option>Investigative</option>
                      <option>IT and Computers</option>
                      <option>Law Enforcement</option>
                      <option>Management</option>
                      <option>Miscellaneous</option>
                      <option>Public Relations</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Experience</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-value="0 To 6 Years"
                      data-size="7"
                      title="Select Experience"
                    >
                      <option>1 Year</option>
                      <option>1.5 Year</option>
                      <option>2 Year</option>
                      <option>2.5 Year</option>
                      <option>3 Year</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Type</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-size="7"
                      title="Select Job Type"
                    >
                      <option>Full Time Jobs</option>
                      <option>Part Time Jobs</option>
                      <option>Work Form Home</option>
                      <option>Internship Jobs</option>
                      <option>Temporary Jobs</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Location</h5>
                    <div className="utf-input-with-icon">
                      <input
                        className="utf-with-border"
                        type="text"
                        placeholder="Type Address"
                      />
                      <i className="icon-material-outline-location-on"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Monthly Salary</h5>
                    <div className="row">
                      <div className="col-xl-6 col-md-6 col-sm-6">
                        <div className="utf-input-with-icon">
                          <input
                            className="utf-with-border"
                            type="text"
                            placeholder="Min Salary"
                          />
                          <i className="currency">USD</i>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-sm-6">
                        <div className="utf-input-with-icon">
                          <input
                            className="utf-with-border"
                            type="text"
                            placeholder="Max Salary"
                          />
                          <i className="currency">USD</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      Job Skills{" "}
                      <i
                        className="help-icon"
                        data-tippy-placement="top"
                        title="Maximum of 6 Skills"
                      ></i>
                    </h5>
                    <div className="keywords-container">
                      <div className="keyword-input-container">
                        <input
                          type="text"
                          className="keyword-input utf-with-border"
                          placeholder="CSS, Photoshop, Js, Bootstrap"
                        />
                        <button className="keyword-input-button ripple-effect">
                          <i className="icon-material-outline-add"></i>
                        </button>
                      </div>
                      <div className="keywords-list"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Upload Resume</h5>
                    <div className="uploadButton margin-top-15 margin-bottom-30">
                      <input
                        className="uploadButton-input"
                        type="file"
                        accept="image/*, application/pdf"
                        id="upload"
                        multiple
                      />
                      <label
                        className="uploadButton-button ripple-effect"
                        for="upload"
                      >
                        Upload Resume
                      </label>
                      <span className="uploadButton-file-name">
                        Upload Resume (Docx, Doc, PDF) File.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Career Description</h5>
                    <textarea
                      cols="40"
                      rows="2"
                      className="utf-with-border"
                      placeholder="Career Description..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>Personal Detail & Address</h3>
            </div>
            <div className="content with-padding padding-bottom-10">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field datepicker">
                    <h5>Birth Date</h5>
                    <input className="utf-with-border" type="date" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Address</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>City</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-size="7"
                      title="Select City"
                    >
                      <option>Allahabad</option>
                      <option>Faizabad</option>
                      <option>Sultanpur</option>
                      <option>Pratapgarh</option>
                      <option>Basti</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>State</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-size="7"
                      title="Select State"
                    >
                      <option>Allahabad</option>
                      <option>Faizabad</option>
                      <option>Sultanpur</option>
                      <option>Pratapgarh</option>
                      <option>Basti</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Country</h5>
                    <select
                      className="selectpicker utf-with-border"
                      data-size="7"
                      title="Select Country"
                    >
                      <option>Allahabad</option>
                      <option>Faizabad</option>
                      <option>Sultanpur</option>
                      <option>Pratapgarh</option>
                      <option>Basti</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Zip Code</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="000000"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Father Name</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Father Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Hobbies(With Comma)</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Hobbies(With Comma)"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Job Description</h5>
                    <textarea
                      cols="20"
                      rows="2"
                      className="utf-with-border"
                      placeholder="Job Description..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>Social Accounts</h3>
            </div>
            <div className="content with-padding padding-bottom-10">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-facebook"></i> Facebook
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.facebook.com/"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-twitter"></i> Twitter
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://twitter.com/"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-linkedin"></i> LinkedIn
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.linkedin.com/"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-google"></i> Google +
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.google.com/"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-pinterest"></i> Pinterest
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.pinterest.com/"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-feather-instagram"></i> Instagram
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.instagram.com/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="utf-centered-button">
        <a
          href="javascript:void(0);"
          className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
        >
          Submit Jobs <i className="icon-feather-plus"></i>
        </a>
      </div>
    </div>
  );
};

export default AddJobs;
