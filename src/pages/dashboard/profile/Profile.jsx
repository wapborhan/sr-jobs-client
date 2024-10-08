import { Link, useLoaderData } from "react-router-dom";
import useMyJobs from "../../../hooks/useMyJobs";
import JobCardTwo from "../../../components/job/JobCardTwo";
import useAppliedJob from "../../../hooks/useAppliedJob";
import useLoginUser from "../../../hooks/useLoginUser";
import AppliedCard from "../../../components/job/AppliedCard";

const Profile = () => {
  const userData = useLoaderData();
  const [loggedInUser] = useLoginUser();
  const [myJobs] = useMyJobs(loggedInUser?.email);
  const [appliedJobs] = useAppliedJob(loggedInUser?._id);
  if (userData.error) {
    return (
      <>
        <h1 style={{ margin: "20px" }}>{userData?.message}</h1>
      </>
    );
  }

  const {
    name,
    photoUrl,
    email,
    companyName,
    accountType,
    bio,
    address,
    socialLinks,
  } = userData;

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
                            <h4>{address}</h4>
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
                                {socialLinks && (
                                  <>
                                    <Link to={socialLinks?.facebook}>
                                      {" "}
                                      <i className="icon-brand-facebook"></i>{" "}
                                      Facebook
                                    </Link>
                                  </>
                                )}
                              </h5>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                {socialLinks && (
                                  <>
                                    <Link to={socialLinks?.twitter}>
                                      <i className="icon-brand-twitter"></i>{" "}
                                      Twitter
                                    </Link>
                                  </>
                                )}
                              </h5>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                {" "}
                                {socialLinks && (
                                  <>
                                    <Link to={socialLinks?.linkedin}>
                                      <i className="icon-brand-linkedin"></i>{" "}
                                      Linkedin
                                    </Link>
                                  </>
                                )}
                              </h5>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-6 col-sm-6">
                            <div className="utf-flex-field">
                              <h5>
                                {socialLinks && (
                                  <>
                                    <Link to={socialLinks?.github}>
                                      <i className="icon-brand-github"></i>{" "}
                                      Github
                                    </Link>
                                  </>
                                )}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="utf-flex-field">
                        <h5>Bio</h5>
                        <h4>{bio}</h4>
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
              <h3>My Applied Job</h3>
            </div>
            <div className="content with-paddings">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="contents">
                    <ul className="utf-dashboard-box-list">
                      {appliedJobs.length > 0
                        ? appliedJobs.slice(0, 5).map((job) => {
                            return <AppliedCard job={job} key={job?._id} />;
                          })
                        : ""}
                    </ul>
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
                  {myJobs.length > 0
                    ? myJobs.slice(0, 5).map((job) => {
                        return <JobCardTwo job={job} key={job?._id} />;
                      })
                    : ""}
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
