import { useContext, useEffect } from "react";
import useSingleUser from "../../../hooks/useSingleUser";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const encodedEmail = btoa(user?.email);
  const [singleUser] = useSingleUser(encodedEmail);
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, setValue } = useForm();

  const {
    accountType,
    address,
    bio,
    companyName,
    email,
    name,
    photoUrl,
    username,
  } = singleUser;

  const onSubmit = (data) => {
    const inputData = {
      username: data?.username,
      email: data?.email,
      name: data?.name,
      photoUrl: data?.photoUrl,
      accountType: data?.accountType,
      companyName: data?.companyName,
      address: data?.address,
      bio: data?.bio,
      socialLinks: {
        facebook: data?.fb,
        twitter: data?.tw,
        linkedin: data?.ld,
        github: data?.gh,
      },
      userType: "user",
    };

    console.log(typeof inputData.email);

    const encodedEmail = btoa(user?.email);
    axiosPublic
      .put(`/user?data=${encodedEmail}`, inputData)
      .then((res) => {
        toast(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.error(err.response);
        toast(err.response.data.message);
      });
  };

  useEffect(() => {
    if (singleUser) {
      setValue("username", username);
      setValue("accountType", accountType);
      setValue("name", name);
      setValue("email", email);
      setValue("companyName", companyName);
      setValue("address", address);
      setValue("bio", bio);
      setValue("photoUrl", photoUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleUser, setValue]);

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0 margin-bottom-30">
            <div className="headline">
              <h3>My Profile Details</h3>
            </div>
            <form
              className="content with-padding padding-bottom-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-xl-4 col-md-3 col-sm-4">
                          <div
                            className="utf-avatar-wrapper"
                            data-tippy-placement="top"
                            title="Change Profile Picture"
                          >
                            <img
                              className="profile-pic"
                              src={photoUrl}
                              alt={name}
                            />
                            <div className="upload-button"></div>
                            <input
                              className="file-upload"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="col-xl-8 col-md-6 col-sm-6">
                          <div className="utf-submit-field">
                            <h5>Username</h5>
                            <input
                              type="text"
                              className="utf-with-border"
                              style={{ background: "#1ca77424" }}
                              defaultValue={username}
                              {...register("username")}
                              disabled
                              title="Not Changeable"
                            />
                          </div>
                          <div className="utf-submit-field">
                            <h5>Photo Url</h5>
                            <input
                              type="text"
                              className="utf-with-border"
                              defaultValue={photoUrl}
                              {...register("photoUrl")}
                            />
                          </div>
                          <div className="utf-submit-field">
                            <h5>Account Type</h5>
                            <div className="utf-account-type d-flex">
                              <select
                                {...register("accountType")}
                                defaultValue={accountType}
                              >
                                <option value="employer">Employer</option>
                                <option value="candidate">Candidate</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Name</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue={name}
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Email Address</h5>
                        <input
                          type="email"
                          className="utf-with-border"
                          defaultValue={email}
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Company Name</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue={companyName}
                          {...register("companyName")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Address</h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue={address}
                          {...register("address")}
                        />
                      </div>
                    </div>

                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="utf-submit-field">
                        <h5>Bio</h5>
                        <textarea
                          name="notes"
                          className="utf-with-border"
                          cols="20"
                          rows="3"
                          defaultValue={bio}
                          {...register("bio")}
                        >
                          {/* {bio} */}
                        </textarea>
                      </div>
                    </div>
                    {/* Social */}
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-facebook"></i> Facebook
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue="https://www.facebook.com/"
                          {...register("fb")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-twitter"></i> Twitter
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue="https://www.twitter.com/"
                          {...register("tw")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-linkedin"></i> Linkedin
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue="https://www.linkedin.com/in/"
                          {...register("ld")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>
                          <i className="icon-brand-github"></i> Github
                        </h5>
                        <input
                          type="text"
                          className="utf-with-border"
                          defaultValue="https://www.github.com/"
                          {...register("gh")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="button ripple-effect big margin-top-10 margin-bottom-20"
              >
                Save Changes
              </button>
            </form>
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
              <a href="#" className="button ripple-effect big margin-top-10">
                Changes Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
