import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import useFormData from "../hooks/useFormData";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  document.title = "SR Jobs | Homepage";
  const navigate = useNavigate();
  const [categoriesList] = useFormData();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      searchCategories: {},
      categories: "all",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate(`/job?text=${data?.searchText}&cat=all`);
  };

  return (
    <div
      className="intro-banner"
      data-background-image="images/home-background-03.jpg"
      style={{
        backgroundImage: `url("images/home-background-03.jpg")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf-banner-headline-text-part">
              <h3>Change Your Career Starts Now!</h3>
              <span>
                Find Jobs, Employment & Career Making Over 100,000 Applications
                Every Day.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <form
              className="utf-intro-banner-search-form-block margin-top-40"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="utf-intro-search-field-item">
                <input
                  id="intro-keywords"
                  type="text"
                  {...register("searchText")}
                  placeholder="Search Jobs Keywords..."
                />
                <i className="icon-feather-search"></i>
              </div>
              <div className="utf-intro-search-field-item">
                <Controller
                  name="categories"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="w-100"
                      options={categoriesList}
                      onChange={(selectedOption) => {
                        field.onChange(
                          selectedOption ? selectedOption.value : null
                        );
                      }}
                      value={categoriesList.find(
                        (option) => option.value === field.value
                      )}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? "grey" : "red",
                          boxShadow: "none",
                          border: state.isFocused ? "none" : "none",
                          outline: "none",
                        }),
                      }}
                    />
                  )}
                />
              </div>
              <div className="utf-intro-search-button">
                <button className="button ripple-effect">
                  <i className="icon-material-outline-search"></i> Search Jobs
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="main_popular_categories">
              <ul className="main_popular_categories_list">
                <li>
                  <Link to="/job?text=&cat=all">
                    <div className="utf_box">
                      <i className="icon-line-awesome-laptop"></i>
                      <p>IT Engineer</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/job?text=&cat=all">
                    <div className="utf_box">
                      <i className="icon-feather-pie-chart"></i>
                      <p>Marketing</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/job?text=&cat=all">
                    <div className="utf_box">
                      <i className="icon-line-awesome-bank"></i>
                      <p>Banking</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/job?text=&cat=all">
                    <div className="utf_box">
                      <i className="icon-line-awesome-medkit"></i>
                      <p>Health Care</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/job?text=&cat=all">
                    <div className="utf_box">
                      <i className="icon-line-awesome-cubes"></i>
                      <p>Design & Art</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
