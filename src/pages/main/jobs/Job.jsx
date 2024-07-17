import { useEffect, useState } from "react";
import JobSearch from "../../../components/job/JobSearch";
import JobLeftSide from "../../../components/job/JobLeftSide";
import JobRightSide from "../../../components/job/JobRightSide";

const Job = () => {
  document.title = "SR Jobs | All Jobs";
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    fetch("http://localhost:3300/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <JobSearch searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <JobLeftSide
              searchQuery={searchQuery}
              handleSearch={handleSearch}
            />
          </div>
          <div className="col-xl-9 col-lg-8">
            <JobRightSide filteredJobs={filteredJobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
