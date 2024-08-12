const useFormData = () => {
  const categoriesList = [
    { value: "IT and Computers", label: "IT and Computers" },
    { value: "Accounting and Finance", label: "Accounting and Finance" },
    { value: "Clerical & Data Entry", label: "Clerical & Data Entry" },
    { value: "Counseling", label: "Counseling" },
    { value: "Court Administration", label: "Court Administration" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Investigative", label: "Investigative" },
    { value: "Law Enforcement", label: "Law Enforcement" },
    { value: "Management", label: "Management" },
    { value: "Miscellaneous", label: "Miscellaneous" },
    { value: "Public Relations", label: "Public Relations" },
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
