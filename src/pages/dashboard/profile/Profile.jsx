import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const userData = useLoaderData();
  // const userData = [];
  console.log(userData);

  const { name, photoUrl, email, companyName, accountType } = userData;

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
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
                        <div className="col-xl-3 col-md-3 col-sm-6">
                          <div
                            className="utf-avatar-wrapper"
                            data-tippy-placement="top"
                            title="Change Profile Picture"
                          >
                            <img
                              className="profile-pic"
                              src={
                                photoUrl
                                  ? photoUrl
                                  : "/images/user-avatar-placeholder.png"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-3 col-sm-3">
                          <div className="utf-flex-field">
                            <h5>Your Name</h5>
                            <h4>{name}</h4>
                          </div>
                          <div className="utf-flex-field">
                            <h5>Email Address</h5>
                            <h4>{email}</h4>
                          </div>
                          <div className="utf-flex-field">
                            <h5>Address</h5>
                            <h4>Bheramara</h4>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="utf-submit-field">
                            <h5>Account Type</h5>
                            <div className="utf-account-type">
                              {accountType === "employer" ? (
                                <span className="utf-ripple-effect-dark">
                                  <i className="icon-material-outline-business-center"></i>{" "}
                                  Employer
                                </span>
                              ) : (
                                <span className="utf-ripple-effect-dark">
                                  <i className="icon-material-outline-account-circle"></i>{" "}
                                  Candidate
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="utf-flex-field">
                            <h5>Company</h5>
                            <h4>{companyName}</h4>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                <i className="icon-brand-facebook"></i> Facebook
                              </h5>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                <i className="icon-brand-twitter"></i> Twitter
                              </h5>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                <i className="icon-brand-linkedin"></i> Linkedin
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="utf-flex-field">
                        <h5>Bio</h5>
                        <h4>
                          Lorem Ipsum is simply dummy text of printing and type
                          setting industry Lorem Ipsum been industry standard
                          dummy text ever since.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div id="test1" className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>My Comapny Job</h3>
            </div>
            <div className="content with-padding">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-flex-field">
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
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div id="test1" className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>My Bookmark Job</h3>
            </div>
            <div className="content with-padding">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-flex-field">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
