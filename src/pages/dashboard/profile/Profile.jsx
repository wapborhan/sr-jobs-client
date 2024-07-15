const Profile = () => {
  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-6">
          <div className="dashboard-box margin-top-0 margin-bottom-30">
            <div className="headline">
              <h3>My Profile Details</h3>
            </div>
            <div className="content with-padding padding-bottom-0">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-xl-5 col-md-3 col-sm-4">
                          <div
                            className="utf-avatar-wrapper"
                            data-tippy-placement="top"
                            title="Change Profile Picture"
                          >
                            <img
                              className="profile-pic"
                              src="images/user-avatar-placeholder.png"
                              alt=""
                            />
                            <div className="upload-button"></div>
                            <input
                              className="file-upload"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="col-xl-7 col-md-9 col-sm-8">
                          <div className="utf-submit-field">
                            <h5>Account Type</h5>
                            <div className="utf-account-type">
                              <div>
                                <input
                                  type="radio"
                                  name="utf-account-type-radio"
                                  id="freelancer-radio"
                                  className="utf-account-type-radio"
                                  checked
                                />
                                <label
                                  htmlFor="freelancer-radio"
                                  title="Employer"
                                  data-tippy-placement="top"
                                  className="utf-ripple-effect-dark"
                                >
                                  <i className="icon-material-outline-business-center"></i>{" "}
                                  Employer
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="utf-account-type-radio"
                                  id="employer-radio"
                                  className="utf-account-type-radio"
                                />
                                <label
                                  htmlFor="employer-radio"
                                  title="Candidate"
                                  data-tippy-placement="top"
                                  className="utf-ripple-effect-dark"
                                >
                                  <i className="icon-material-outline-account-circle"></i>{" "}
                                  Candidate
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Your Name</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="John Williams"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Phone Number</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="(+22) 1201 123-456"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Email Address</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="demo@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="utf-submit-field">
                        <h5>Notes</h5>
                        <textarea
                          name="notes"
                          className="utf-with-border"
                          cols="20"
                          rows="3"
                        >
                          Lorem Ipsum is simply dummy text of printing and type
                          setting industry Lorem Ipsum been industry standard
                          dummy text ever since.
                        </textarea>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-facebook"></i> Facebook
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="https://www.facebook.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-twitter"></i> Twitter
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="https://www.twitter.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-linkedin"></i> Linkedin
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="https://www.google.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-google"></i> Google
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          value="https://www.linkedin.com/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                className="button ripple-effect big margin-top-10 margin-bottom-20"
              >
                Save Changes
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div id="test1" className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>Change Password</h3>
            </div>
            <div className="content with-padding">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Current Password</h5>
                    <input
                      type="password"
                      className="utf-with-border"
                      title="Current Password"
                      data-tippy-placement="top"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>New Password</h5>
                    <input
                      type="password"
                      className="utf-with-border"
                      title="The password must be at least 8 characters"
                      data-tippy-placement="top"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Confirm New Password</h5>
                    <input
                      type="password"
                      className="utf-with-border"
                      title="The password must be at least 8 characters"
                      data-tippy-placement="top"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                className="button ripple-effect big margin-top-10"
              >
                Changes Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
