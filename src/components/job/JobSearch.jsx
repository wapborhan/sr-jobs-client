import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import useFormData from "../../hooks/useFormData";

const JobSearch = ({ handleSearch }) => {
  const [categoriesList] = useFormData();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      searchCategories: {},
      searchText: "",
    },
  });
  const onSubmit = (data) => {
    // console.log(data);
    handleSearch(data);
  };

  return (
    <div className="inner_search_block_section padding-top-0 padding-bottom-40">
      <div className="container">
        <div className="col-md-12">
          <form
            className="utf-intro-banner-search-form-block"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="utf-intro-search-field-item">
              <i className="icon-feather-search"></i>
              <input
                id="intro-keywords"
                type="text"
                placeholder="Search Jobs Keywords..."
                // defaultValue={searchQuery}
                {...register("searchText")}
              />
            </div>
            <div className="utf-intro-search-field-item">
              <Controller
                name="searchCategories"
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
              <button type="submit" className="button ripple-effect">
                <i className="icon-material-outline-search"></i> Search
              </button>
            </div>
          </form>
          <p className="utf-trending-silver-item">
            <span className="utf-trending-black-item">
              Trending Jobs Keywords:
            </span>{" "}
            Web Designer, Web Developer, Graphic Designer, PHP Developer, IOS
            Developer, Android Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
