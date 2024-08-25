import { useEffect, useState } from "react";
import JobSearch from "../../../components/job/JobSearch";
import JobLeftSide from "../../../components/job/JobLeftSide";
import JobRightSide from "../../../components/job/JobRightSide";
import useJobs from "../../../hooks/useJobs";
import { useSearchParams } from "react-router-dom";

const Job = () => {
  document.title = "SR Jobs | All Jobs";
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState(false);
  const [jobCat, setJobCat] = useState(
    searchParams.size > 0 ? searchParams.get("cat") : "all"
  );
  // eslint-disable-next-line no-unused-vars
  const [jobSerch, setJobSerch] = useState(
    searchParams.size > 0 ? searchParams.get("text") : ""
  );
  const [allJobs, isLoading] = useJobs({ jobCat, jobSerch });
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  const handleSearch = (data) => {
    setJobCat(data.searchCategories);
    const filtered = allJobs.filter((job) =>
      job.title.toLowerCase().includes(data?.searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleBookmark = () => {
    setActive(!active);
  };

  useEffect(() => {
    setFilteredJobs(allJobs);
    const filtered = allJobs.filter((job) =>
      job.title.toLowerCase().includes(jobSerch.toLowerCase())
    );

    setFilteredJobs(filtered);
  }, [allJobs, jobSerch, jobCat]);

  return (
    <>
      <JobSearch handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <JobLeftSide />
          </div>
          <div className="col-xl-9 col-lg-8">
            <JobRightSide
              jobs={filteredJobs}
              allJobs={allJobs}
              loading={isLoading}
              active={active}
              handleBookmark={handleBookmark}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
