import { Controller, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import useFormData from "../../../hooks/useFormData";
import { useState } from "react";

const UpdateJob = () => {
  const jodData = useLoaderData();
  const [categoriesList, jobTypeList, experienceList, genderList] =
    useFormData();
  // const axiosPublic = useAxiosPublic();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillsAbilities: [],
      deadline: null,
    },
  });

  const {
    title,
    vacancy,
    qualification,
    deadline,
    location,
    image,
    locMapLink,
    educationQualification,
    jobsDescription,
    categories,
    jobType,
    experience,
    gender,
    salaryRange,
    skillsAbilities,
  } = jodData;

  // console.log(jodData);

  const catIndex = categoriesList.findIndex(
    (category) => category.value === categories
  );
  const typeIndex = jobTypeList.findIndex(
    (category) => category.value === jobType
  );
  const experienceIndex = experienceList.findIndex(
    (category) => category.value === experience
  );
  const genderIndex = genderList.findIndex(
    (category) => category.value === gender
  );
  const range = salaryRange.split("-");

  const onSubmit = (data) => {
    const inputData = {
      companyInf: {
        _id: data?.companyInf?._id,
        compName: data?.companyInf?.compName,
        compLogoUrl: data?.companyInf?.compLogoUrl,
      },
      postedDate: new Date(),
      title: data?.jobTitle,
      categories: data?.jobCategories,
      vacancy: data?.vacancy,
      qualification: data?.qualification,
      jobType: data?.jobType,
      experience: data?.experience,
      gender: data?.gender,
      location: data?.location,
      salaryRange: `$${data?.minSalary} - $${data?.maxSalary}`,
      image: data?.image,
      locMapLink: data?.locMapLink,
      deadline: data?.deadline,
      skillsAbilities: data?.skillsAbilities,
      educationQualification: data?.educationQualification,
      jobsDescription: data?.jobsDescription,
    };
    console.log(inputData);

    // axiosPublic
    //   .post("/jobs", inputData)
    //   .then((res) => {
    //     alert("Post Succesfull.");
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const handleChange = (newValue) => {
    // Update form state with selected values
    setValue(
      "skillsAbilities",
      newValue.map((item) => item.value),
      { shouldDirty: true }
    );
    setValues(
      newValue.map((item) => {
        value: item.value;
        label: item.value;
      })
    );
  };

  const newSkillsAbilities = skillsAbilities.map((val) => ({
    value: val,
    label: val,
  }));

  const orderOptions = (values) => {
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
  };

  const [skilsValue, setValues] = useState(orderOptions(newSkillsAbilities));

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
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Job Title </h5>{" "}
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Job Title"
                      defaultValue={title}
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
                    <h5>Job Category</h5>
                    <Controller
                      name="jobCategories"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={categoriesList}
                          defaultValue={categoriesList[catIndex]}
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
                    <h5>Vacancy</h5>
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Vacancy"
                      defaultValue={vacancy}
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
                      defaultValue={qualification}
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
                          // className="w-100"
                          render={({ field }) => (
                            <DatePicker
                              {...field}
                              className="datePick !w-100"
                              showIcon
                              dateFormat="dd-MM-yyyy"
                              selected={deadline}
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
                    <Controller
                      name="jobType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={jobTypeList}
                          defaultValue={jobTypeList[typeIndex]}
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
                          value={jobTypeList.find(
                            (option) => option.value === field.value
                          )}
                        />
                      )}
                    />

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
                    <Select
                      className="basic-single selectct"
                      classNamePrefix="select"
                      defaultValue={experienceList[experienceIndex]}
                      name="experience"
                      options={experienceList}
                    />
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
                    <Select
                      className="basic-single selectct"
                      classNamePrefix="select"
                      defaultValue={genderList[genderIndex]}
                      name="gender"
                      options={genderList}
                    />
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
                        defaultValue={location}
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
                            defaultValue={range[0].replace(/\$\s*/, "").trim()}
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
                            defaultValue={range[1].replace(/\$\s*/, "").trim()}
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
                      defaultValue={image}
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
                      defaultValue={locMapLink}
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
                              // onChange={(newValue) => {
                              //   onChange(newValue.map((item) => item.value));
                              // }}
                              onChange={handleChange}
                              // value={value?.map((val) => ({
                              //   value: val,
                              //   label: val,
                              // }))}
                              value={skilsValue}
                              placeholder="Type something and press enter..."
                            />
                          )}
                        />

                        {errors.skillsAbilities && (
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
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Career Description</h5>
                    <textarea
                      cols="40"
                      rows="2"
                      className="utf-with-border"
                      placeholder="Career Description..."
                      defaultValue={jobsDescription}
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
                      defaultValue={educationQualification}
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

export default UpdateJob;
