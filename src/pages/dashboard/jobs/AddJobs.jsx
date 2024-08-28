import { useContext, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import DatePicker from "react-datepicker";
import useCompany from "../../../hooks/useCompany";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ReactQuill from "react-quill";
import { formats, modules } from "../../../components/shared/EditorConfig";
import useSingleUser from "../../../hooks/useSingleUser";
import { AuthContext } from "../../../Provider/AuthProvider";
import useFormData from "../../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobs = () => {
  const quillRef = useRef();
  const [categoriesList] = useFormData();
  const [allCompany] = useCompany();
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(btoa(user?.email));
  const axiosPublic = useAxiosPublic();
  const [jobsDescription, setJobsDescription] = useState();
  const navigate = useNavigate();
  // console.log(singleUser);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillsAbilities: [],
      deadline: null,
    },
  });
  const companys = allCompany.map((company) => ({
    label: `${company?.compName}`,
    value: `${company?.compName}`,
    compName: company?.compName,
    _id: company?._id,
    compLogoUrl: company?.compLogoUrl,
  }));

  const onSubmit = (data) => {
    const inputData = {
      ...data,
      companyInf: {
        _id: data?.companyInf?._id,
        compName: data?.companyInf?.compName,
        compLogoUrl: data?.companyInf?.compLogoUrl,
      },
      userEmail: singleUser?.email,
      postedDate: new Date(),
      salaryRange: `$${data?.minSalary} - $${data?.maxSalary}`,
      jobsDescription: jobsDescription,
    };

    console.log(inputData);

    axiosPublic
      .post("/jobs", inputData)
      .then((res) => {
        toast("Post Succesfull.");
        reset();
        setTimeout(() => {
          navigate("/dashboard/jobs/view");
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
      });

    // reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="utf-dashboard-content-inner-aera"
    >
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>General Information</h3>
            </div>
            <div className="content with-padding padding-bottom-40">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Company</h5>
                    <Controller
                      control={control}
                      name="companyInf"
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={companys}
                          name="compName"
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              boxShadow: "none",
                              paddingTop: 0,
                              paddingBottom: 0,
                              margin: 0,
                            }),
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Category</h5>
                    <Controller
                      name="categories"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={categoriesList}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              boxShadow: "none",
                              paddingTop: 0,
                              paddingBottom: 0,
                              margin: 0,
                            }),
                          }}
                          onChange={(selectedOption) => {
                            field.onChange(
                              selectedOption ? selectedOption.value : null
                            );
                          }}
                          value={categoriesList.find(
                            (option) => option.value === field.value
                          )}
                        />
                      )}
                    />
                    {errors.jobCategories && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Title </h5>{" "}
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Job Title"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Workplace type</h5>
                    <select
                      className="selectpickers utf-with-border"
                      data-size="7"
                      title="Select Workplace Type"
                      {...register("workplaceType", { required: true })}
                    >
                      <option value="on-site">On Site</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="remote">Remote</option>
                    </select>
                    {errors.workplaceType && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="utf-submit-field w-100">
                    <h5>
                      Deadline{" "}
                      <i className="help-icon" data-tippy-placement="top"></i>
                    </h5>
                    <div className="keywords-container">
                      <div className="keyword-input-container w-100">
                        <Controller
                          name="deadline"
                          control={control}
                          className="w-100"
                          render={({ field }) => (
                            <DatePicker
                              {...field}
                              className="w-100"
                              selected={field.value}
                              placeholderText="Select date"
                              onChange={(date) => field.onChange(date)}
                            />
                          )}
                        />
                        {errors.deadline && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="keywords-list"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Type</h5>
                    <select
                      className="selectpickers utf-with-border"
                      data-size="7"
                      title="Select Job Type"
                      {...register("jobType", { required: true })}
                    >
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="internship">Internship</option>
                      <option value="temporary">Temporary</option>
                      <option value="contract">Contract</option>
                    </select>
                    {errors.jobType && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Experience</h5>
                    <select
                      className="selectpickers utf-with-border"
                      data-value="0 To 6 Years"
                      data-size="7"
                      title="Select Experience"
                      {...register("experience", { required: true })}
                    >
                      <option value="1-year">1 Year</option>
                      <option value="1.5-year">1.5 Year</option>
                      <option value="2-year">2 Year</option>
                      <option value="2.5-year">2.5 Year</option>
                      <option value="3-year">3 Year</option>
                      <option value="5-year">5 Year</option>
                      <option value="5-plus-year">5+ Year</option>
                    </select>
                    {errors.experience && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Gender</h5>
                    <select
                      className="selectpickers utf-with-border"
                      data-value="0 To 6 Years"
                      data-size="7"
                      title="Select Gender"
                      {...register("gender", { required: true })}
                    >
                      <option value="both">Both</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="third-gender">Third Gender</option>
                    </select>{" "}
                    {errors.gender && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                        {...register("location", { required: true })}
                      />
                      <i className="icon-material-outline-location-on"></i>
                      {errors.location && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
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
                            type="number"
                            placeholder="Min Salary"
                            {...register("minSalary", { required: true })}
                          />
                          <i className="currency">USD</i>
                          {errors.minSalary && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-sm-6">
                        <div className="utf-input-with-icon">
                          <input
                            className="utf-with-border"
                            type="number"
                            placeholder="Max Salary"
                            {...register("maxSalary", { required: true })}
                          />
                          <i className="currency">USD</i>
                          {errors.maxSalary && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8 col-md-8 col-sm-12">
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
                        <Controller
                          name="skillsAbilities"
                          control={control}
                          render={({ field: { onChange, value, ref } }) => (
                            <CreatableSelect
                              components={{
                                DropdownIndicator: null,
                              }}
                              inputRef={ref}
                              isMulti
                              onChange={(newValue) => {
                                onChange(newValue.map((item) => item.value));
                              }}
                              value={value?.map((val) => ({
                                value: val,
                                label: val,
                              }))}
                              placeholder="Type something and press enter..."
                            />
                          )}
                        />
                        {errors.skillsAbilities && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                        {/* <input
                          type="text"
                          className="keyword-input utf-with-border"
                          placeholder="CSS, Photoshop, Js, Bootstrap"
                        />
                        <button className="keyword-input-button ripple-effect">
                          <i className="icon-material-outline-add"></i>
                        </button> */}
                      </div>
                      <div className="keywords-list"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Career Description</h5>
                    <ReactQuill
                      ref={quillRef}
                      theme="snow"
                      value={jobsDescription}
                      onChange={(value) => setJobsDescription(value)}
                      placeholder={"Write something awesome..."}
                      modules={modules}
                      formats={formats}
                      style={{ height: "300px" }}
                    />

                    {errors.jobsDescription && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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

export default AddJobs;
