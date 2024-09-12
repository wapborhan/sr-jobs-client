import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useSingleUser from "../../hooks/useSingleUser";
import { useState } from "react";
import { toast } from "react-toastify";

const ApplyJob = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const encodedEmail = btoa(user?.email);
  const { _id, salaryRange, title, companyInf } = useLoaderData();
  const [singleUser] = useSingleUser(encodedEmail);
  const [langChange, setLangChange] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  const { name, photoUrl, email } = singleUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const expectedSalary = form.expectedSalary.value;
    const currentSalary = form.currentSalary.value;
    const agree = form.agree.value;

    const inputData = {
      applierInf: singleUser?._id,
      jobInf: _id,
      expectedSalary,
      currentSalary,
      agree,
    };

    axiosPublic
      .post(`/apply`, inputData)
      .then((res) => {
        toast(res.data.message);
      })
      .catch((err) => {
        console.log(err);

        toast(err.response.data.message);
      });
  };

  return (
    <div id="modal" className="white-popup-blocks mfp-hidea">
      <div id="small-dialog-1" className="zoom-anim-dialog dialog-with-tabs">
        <div className="utf-signin-form-part">
          <ul
            className="utf-popup-tabs-nav-item"
            style={{ pointerEvents: "none" }}
          >
            <li className="modal-title active">ONLINE APPLICATION FORM</li>
          </ul>
          <div className="utf-popup-container-part-tabs">
            <div className="utf-popup-tab-content-item" id="tab">
              <div className="utf-welcome-text-item">
                <div className="bid-acceptance margin-top-15">
                  Salary Range :- {salaryRange}
                </div>
              </div>

              <div className="col-xl-12">
                <div className="row">
                  <div className="col-xl-7 col-md-8 col-sm-6">
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
                              companyInf?.compLogoUrl
                                ? companyInf?.compLogoUrl
                                : "/images/user-avatar-placeholder.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-9 col-md-3 col-sm-3">
                        <div className="utf-flex-field">
                          <h5>Company Name</h5>
                          <h4>{companyInf?.compName}</h4>
                        </div>
                        <div className="utf-flex-field">
                          <h5>Job</h5>
                          <h4>{title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-6">
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
                  <div className="col-xl-3 col-md-2 col-sm-3">
                    <div className="utf-flex-field">
                      <h5>Your Name</h5>
                      <h4>{name}</h4>
                    </div>
                    <div className="utf-flex-field">
                      <h5>Email Address</h5>
                      <h4>{email}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-6">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Your Expected salary (Monthly)*
                  </span>
                  <input
                    className="utf-with-border"
                    type="number"
                    name="expectedSalary"
                    required
                  />
                </div>
                <div className="mt-6">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Your Current Salary (Monthly)
                  </span>
                  <input
                    className="utf-with-border"
                    type="number"
                    name="currentSalary"
                    required
                  />
                </div>
                <div id="terms">
                  <div className="radio">
                    <div
                      className="d-flex"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {langChange ? (
                        <b> Please read before apply *</b>
                      ) : (
                        <b> আবেদন করার আগে অনুগ্রহ করে পড়ুন * </b>
                      )}
                      <div
                        className="span cursor-pointer"
                        onClick={() => setLangChange(!langChange)}
                      >
                        {langChange
                          ? "বাংলায় দেখুন"
                          : "Translate into English"}
                      </div>
                    </div>
                    <input
                      id="radio-1"
                      name="agree"
                      type="radio"
                      value={isAgreed}
                      checked={isAgreed}
                      onChange={() => setIsAgreed(!isAgreed)}
                    />
                    <label htmlFor="radio-1">
                      {langChange ? (
                        <>
                          <span className="radio-label"></span>
                          <p>
                            SR Jobs Limited will not be responsible for any
                            financial transactions or fraud by the company after
                            applying through the website. The company only
                            connects companies and job seekers. I have read the
                            above warning message.
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="radio-label"></span>
                          <p>
                            এসআর জবস লিমিটেড চাকরিতে আবেদনের পর কোম্পানির কোনো
                            আর্থিক লেনদেন বা প্রতারণার জন্য দায়ী থাকবে
                            না।কোম্পানী নিয়োগকর্তা এবং চাকরিপ্রার্থীদের ভিতর
                            যোগাযোগের মাধ্যম মাত্র। উপরোক্ত সতর্ক বার্তাটি আমি
                            পড়েছি
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
                {isAgreed ? (
                  <button
                    className="button full-width utf-button-sliding-icon ripple-effect"
                    type="submit"
                  >
                    Apply <i className="icon-feather-chevron-right"></i>
                  </button>
                ) : (
                  <button
                    className="button full-width"
                    style={{ cursor: "default" }}
                    type="submit"
                    disabled
                  >
                    Apply
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <button
          title="Close (Esc)"
          type="button"
          className="mfp-close"
        ></button>
      </div>
    </div>
  );
};

export default ApplyJob;
