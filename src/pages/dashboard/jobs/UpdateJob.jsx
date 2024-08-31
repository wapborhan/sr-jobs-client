import { Controller, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { formats, modules } from "../../../components/shared/EditorConfig";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import useFormData from "../../../hooks/useFormData";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const UpdateJob = () => {
  const quillRef = useRef();
  const [jobsDescriptions, setJobsDescriptions] = useState();
  const jodData = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [
    categoriesList,
    jobTypeList,
    experienceList,
    genderList,
    workplaceList,
  ] = useFormData();

  const {
    _id,
    title,
    deadline,
    location,
    jobsDescription,
    categories,
    jobType,
    experience,
    gender,
    salaryRange,
    skillsAbilities,
    workplaceType,
  } = jodData;

  const catIndex = categoriesList.findIndex(
    (category) => category.value === categories
  );
  const typeIndex = jobTypeList.findIndex(
    (category) => category.value === jobType
  );
  const workPlaceIndex = workplaceList.findIndex(
    (category) => category.value === workplaceType
  );
  const experienceIndex = experienceList.findIndex(
    (category) => category.value === experience
  );
  const genderIndex = genderList.findIndex(
    (category) => category.value === gender
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillsAbilities: skillsAbilities,
      deadline: deadline ? new Date(deadline) : null,
    },
  });

  const range = salaryRange.split("-");

  const onSubmit = (data) => {
    const inputData = {
      title: data?.title,
      categories: data?.jobCategories?.value,

      workplaceType: data?.workplaceTypes?.value,
      jobType: data?.jobTypes?.value,
      experience: data?.experiences?.value,
      gender: data?.genders?.value,

      location: data?.location,
      salaryRange: `$${data?.minSalary} - $${data?.maxSalary}`,

      deadline: data?.deadline,
      skillsAbilities: data?.skillsAbilities,

      jobsDescription: jobsDescriptions,
    };
    // console.log(inputData);

    axiosPublic
      .put(`/job/${_id}`, inputData)
      .then((res) => {
        toast("Update Successfuly");
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
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
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Job Title </h5>{" "}
                    <input
                      type="text"
                      className="utf-with-border"
                      placeholder="Job Title"
                      defaultValue={title}
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
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
                      defaultValue={categoriesList[catIndex]}
                      render={({ field }) => (
                        <Select
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
                          value={
                            categoriesList.find(
                              (option) => option.value === field.value?.value
                            ) || null
                          }
                          onChange={(selectedOption) => {
                            field.onChange(selectedOption || null);
                          }}
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
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Workplace type</h5>
                    <Controller
                      name="workplaceTypes"
                      control={control}
                      defaultValue={workplaceList[workPlaceIndex]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={workplaceList}
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
                            field.onChange(selectedOption || null);
                          }}
                          defaultValue={workplaceList[workPlaceIndex]}
                          value={workplaceList.find(
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
                <div className="col-xl-3 col-md-3 col-sm-12">
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
                          render={({ field }) => (
                            <DatePicker
                              {...field}
                              className="datePick !w-100"
                              showIcon
                              dateFormat="dd-MM-yyyy"
                              selected={
                                field.value ? new Date(field.value) : null
                              } // Show the controlled value
                              placeholderText="Select date"
                              onChange={(date) => field.onChange(date)} // Updates form state on change
                            />
                          )}
                        />

                        {errors.deadline && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      {/* <div className="keywords-list"></div> */}
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Job Type</h5>
                    <Controller
                      name="jobTypes"
                      control={control}
                      defaultValue={jobTypeList[typeIndex]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={jobTypeList}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              boxShadow: "none",
                              paddingTop: 0,
                              paddingBottom: 0,
                              margin: 0,
                            }),
                          }}
                          value={
                            jobTypeList.find(
                              (option) => option.value === field.value?.value
                            ) || null
                          }
                          onChange={(selectedOption) => {
                            field.onChange(selectedOption || null);
                          }}
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
                    <Controller
                      name="experiences"
                      control={control}
                      defaultValue={experienceList[experienceIndex]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={experienceList}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              boxShadow: "none",
                              paddingTop: 0,
                              paddingBottom: 0,
                              margin: 0,
                            }),
                          }}
                          value={
                            experienceList.find(
                              (option) => option.value === field.value?.value
                            ) || null
                          }
                          onChange={(selectedOption) => {
                            field.onChange(selectedOption || null);
                          }}
                        />
                      )}
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
                    <Controller
                      name="genders"
                      control={control}
                      defaultValue={genderList[genderIndex]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          className="w-100 selectct"
                          options={genderList}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              boxShadow: "none",
                              paddingTop: 0,
                              paddingBottom: 0,
                              margin: 0,
                            }),
                          }}
                          value={
                            genderList.find(
                              (option) => option.value === field.value?.value
                            ) || null
                          }
                          onChange={(selectedOption) => {
                            field.onChange(selectedOption || null);
                          }}
                        />
                      )}
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
                          defaultValue={skillsAbilities}
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <CreatableSelect
                              isMulti
                              components={{
                                DropdownIndicator: null,
                              }}
                              inputRef={ref}
                              onChange={(newValue) => {
                                onChange(newValue.map((item) => item.value));
                              }}
                              onBlur={onBlur}
                              value={
                                value
                                  ? value.map((val) => ({
                                      value: val,
                                      label: val,
                                    }))
                                  : []
                              }
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
                    <ReactQuill
                      ref={quillRef}
                      theme="snow"
                      defaultValue={jobsDescription}
                      onChange={(value) => setJobsDescriptions(value)}
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

export default UpdateJob;
