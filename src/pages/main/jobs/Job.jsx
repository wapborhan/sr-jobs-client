import { useEffect, useState } from "react";
import JobSearch from "../../../components/job/JobSearch";
import JobLeftSide from "../../../components/job/JobLeftSide";
import JobRightSide from "../../../components/job/JobRightSide";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Job = () => {
  document.title = "SR Jobs | All Jobs";
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const axiosPublic = useAxiosPublic();

  const handleSearch = (data) => {
    setSearchQuery(data);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(data.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    axiosPublic.get("/jobs").then((res) => {
      setJobs(res.data);
      setFilteredJobs(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(filteredJobs);

  return (
    <>
      <JobSearch searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <JobLeftSide searchQuery={searchQuery} />
          </div>
          <div className="col-xl-9 col-lg-8">
            <JobRightSide jobs={filteredJobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
