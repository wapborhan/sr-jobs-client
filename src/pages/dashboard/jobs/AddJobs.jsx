import { Controller, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import useCategories from "../../../hooks/useCategories";
import DatePicker from "react-datepicker";
import useCompany from "../../../hooks/useCompany";

const AddJobs = () => {
  const [categories] = useCategories();
  const [allCompany] = useCompany();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillsAbilities: [],
      deadline: null,
    },
  });
  const companys = allCompany.map((company) => ({
    label: `${company.compName}`,
    compName: company.compName,
    _id: company._id,
    compLogoUrl: company.compLogoUrl,
  }));

  const onSubmit = (data) => {
    const inputData = {
      ...data,
    };
    console.log(inputData);
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
            <div className="content with-padding padding-bottom-10">
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
                      name="jobCategories"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={categories}
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
                          value={categories.find(
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
                      {...register("jobTitle", { required: true })}
                    />
                    {errors.jobTitle && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Vacancy</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Vacancy"
                      {...register("vacancy", { required: true })}
                    />
                    {errors.vacancy && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Qualification</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Qualification"
                      {...register("qualification", { required: true })}
                    />
                    {errors.qualification && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
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
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Type</h5>
                    <select
                      className="selectpickers utf-with-border"
                      data-size="7"
                      title="Select Job Type"
                      {...register("jobType", { required: true })}
                    >
                      <option>Full Time Jobs</option>
                      <option>Part Time Jobs</option>
                      <option>Work Form Home</option>
                      <option>Internship Jobs</option>
                      <option>Temporary Jobs</option>
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
                      <option>1 Year</option>
                      <option>1.5 Year</option>
                      <option>2 Year</option>
                      <option>2.5 Year</option>
                      <option>3 Year</option>
                    </select>{" "}
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
                      <option>Both</option>
                      <option>Male</option>
                      <option>Female</option>
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
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Image Url</h5>{" "}
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Image Url"
                      {...register("image", { required: true })}
                    />
                    {errors.image && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>{" "}
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Google Map Link</h5>{" "}
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Google Map Link"
                      {...register("locMapLink", { required: true })}
                    />
                    {errors.locMapLink && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    <textarea
                      cols="40"
                      rows="2"
                      className="utf-with-border"
                      placeholder="Career Description..."
                      {...register("jobsDescription", { required: true })}
                    ></textarea>{" "}
                    {errors.jobsDescription && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Education Description</h5>
                    <textarea
                      cols="40"
                      rows="2"
                      className="utf-with-border"
                      placeholder="Education Description..."
                      {...register("educationQualification", {
                        required: true,
                      })}
                    ></textarea>{" "}
                    {errors.educationQualification && (
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
