import { createContext, useEffect, useState } from "react";

export const JobContex = createContext();

const JobContext = ({ children }) => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  const jobData = { allJobs };
  return <JobContex.Provider value={jobData}>{children}</JobContex.Provider>;
};

export default JobContext;
