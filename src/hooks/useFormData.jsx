const useFormData = () => {
  const categoriesList = [
    {
      value: "it-and-computers",
      label: "IT and Computers",
      icon: "icon-line-awesome-laptop",
      image: "/images/job-category-01.jpg",
    },
    {
      value: "education-training",
      label: "Education & Training",
      icon: "icon-line-awesome-graduation-cap",
      image: "/images/job-category-02.jpg",
    },
    {
      value: "accounting-and-finance",
      label: "Accounting and Finance",
      icon: "icon-material-outline-account-balance-wallet",
      image: "/images/job-category-03.jpg",
    },
    {
      value: "clerical-data-entry",
      label: "Clerical & Data Entry",
      icon: "icon-feather-database",
      image: "/images/job-category-04.jpg",
    },
    {
      value: "counseling",
      label: "Counseling",
      icon: "icon-feather-user-plus",
      image: "/images/job-category-05.jpg",
    },
    {
      value: "court-administration",
      label: "Court Administration",
      icon: "icon-material-outline-gavel",
      image: "/images/job-category-06.jpg",
    },
    {
      value: "human-resources",
      label: "Human Resources",
      icon: "icon-line-awesome-user-plus",
      image: "/images/job-category-07.jpg",
    },
    {
      value: "investigative",
      label: "Investigative",
      icon: "icon-line-awesome-user-secret",
      image: "/images/job-category-08.jpg",
    },
    {
      value: "law-enforcement",
      label: "Law Enforcement",
      icon: "icon-line-awesome-gavel",
      image: "/images/job-category-01.jpg",
    },
    {
      value: "management",
      label: "Management",
      icon: "icon-feather-users",
      image: "/images/job-category-02.jpg",
    },
    {
      value: "miscellaneous",
      label: "Miscellaneous",
      icon: "icon-line-awesome-gear",
      image: "/images/job-category-03.jpg",
    },
    {
      value: "public-relations",
      label: "Public Relations",
      icon: "icon-line-awesome-rub",
      image: "/images/job-category-04.jpg",
    },
  ];

  const jobTypeList = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "internship", label: "Internship" },
    { value: "remote", label: "Remote" },
    { value: "temporary", label: "Temporary" },
  ];
  const experienceList = [
    { value: "fresher", label: "Fresher" },
    { value: "1-year", label: "1 Year" },
    { value: "1.5-year", label: "1.5 Year" },
    { value: "2-year", label: "2 Year" },
    { value: "2.5-year", label: "2.5 Year" },
    { value: "3-year", label: "3 Year" },
  ];

  const genderList = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "both", label: "Both" },
  ];

  return [categoriesList, jobTypeList, experienceList, genderList];
};

export default useFormData;
