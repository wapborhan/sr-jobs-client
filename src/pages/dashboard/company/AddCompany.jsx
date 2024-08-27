import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ReactQuill from "react-quill";
import { formats, modules } from "../../../components/shared/EditorConfig";
import { toast } from "react-toastify";

const AddCompany = () => {
  const quillRef = useRef();
  const axiosPublic = useAxiosPublic();
  const [compDetails, setCompDetails] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inputData = {
      compLogoUrl: data?.compLogoUrl,
      compName: data?.compName,
      compCategories: data?.compCategories,
      compWebsite: data?.compWebsite,
      compNumber: data?.compNumber,
      compEmail: data?.compEmail,
      compAdress: `${data?.compZip}, ${data?.compAdress}, ${data?.compState}, ${data?.compCountry}`,
      compDetails: compDetails,
      social: {
        facebok: data?.facebook,
        linkedin: data?.linkedin,
        twitter: data?.twitter,
      },
    };

    axiosPublic
      .post("/company", inputData)
      .then((res) => {
        console.log(res);
        toast("Company Added.");
      })
      .catch((err) => {
        console.error(err);
        toast("Company Added Faild.");
      });
  };

  return (
    <form
      className="utf-dashboard-content-inner-aera"
      onSubmit={handleSubmit(onSubmit)}
    >
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
                    <h5>
                      Company Logo Url <span className="text-danger">*</span>
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Company Logo Url"
                      {...register("compLogoUrl", { required: true })}
                    />
                    {errors.compLogoUrl && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>
                      Company Name <span className="text-danger">*</span>
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Company Name"
                      {...register("compName", { required: true })}
                    />{" "}
                    {errors.compName && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>
                      Company Categories <span className="text-danger">*</span>
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Company Categories"
                      {...register("compCategories", { required: true })}
                    />{" "}
                    {errors.compCategories && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>
                      Email Address <span className="text-danger">*</span>
                    </h5>
                    <input
                      type="email"
                      className="utf-with-border"
                      placeholder="Email Address"
                      {...register("compEmail", { required: true })}
                    />{" "}
                    {errors.compEmail && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Company Website</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Company Website"
                      {...register("compWebsite", { required: true })}
                    />{" "}
                    {errors.compWebsite && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Phone Number</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Phone Number"
                      {...register("compNumber")}
                    />{" "}
                  </div>
                </div>

                <div className="col-xl-12 col-md-12 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Location</h5>
                    <div className="row">
                      <div className="col-xl-3 col-md-6 col-sm-6">
                        <input
                          type="text"
                          className="utf-with-border"
                          placeholder="Zip Code"
                          {...register("compZip")}
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6">
                        <input
                          type="text"
                          className="utf-with-border"
                          placeholder="Address"
                          {...register("compAdress")}
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6">
                        <input
                          type="text"
                          className="utf-with-border"
                          placeholder="State"
                          {...register("compState")}
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6">
                        <input
                          type="text"
                          className="utf-with-border"
                          placeholder="Country *"
                          {...register("compCountry", { required: true })}
                        />{" "}
                        {errors.compCountry && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="utf-submit-field"></div>
                </div>

                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5> Company Details</h5>
                    <ReactQuill
                      ref={quillRef}
                      theme="snow"
                      value={compDetails}
                      onChange={(value) => setCompDetails(value)}
                      placeholder={"Company Details..."}
                      modules={modules}
                      formats={formats}
                      style={{ height: "300px" }}
                    />
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
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-facebook"></i> Facebook
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.facebook.com/"
                      {...register("facebook")}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-twitter"></i> Twitter
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://twitter.com/"
                      {...register("twitter")}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      <i className="icon-brand-linkedin"></i> LinkedIn
                    </h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="https://www.linkedin.com/"
                      {...register("linkedin")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="utf-centered-button">
        <button
          type="submit"
          className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
        >
          Submit Jobs <i className="icon-feather-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default AddCompany;
