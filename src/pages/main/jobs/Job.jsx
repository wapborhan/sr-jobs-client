import { useEffect, useState } from "react";
import JobSearch from "../../../components/job/JobSearch";
import JobLeftSide from "../../../components/job/JobLeftSide";
import JobRightSide from "../../../components/job/JobRightSide";
import useJobs from "../../../hooks/useJobs";

const Job = () => {
  document.title = "SR Jobs | All Jobs";
  const [allJobs] = useJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  const handleSearch = (data) => {
    setSearchQuery(data);

    const filtered = allJobs.filter((job) =>
      job.title.toLowerCase().includes(data.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    setFilteredJobs(allJobs);
  }, [allJobs]);

  return (
    <>
      <JobSearch searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <JobLeftSide searchQuery={searchQuery} />
          </div>
          <div className="col-xl-9 col-lg-8">
            <JobRightSide jobs={filteredJobs} allJobs={allJobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
