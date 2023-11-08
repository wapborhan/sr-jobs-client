import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import JobsCard from "./JobsCard";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("https://b8a11-server-side-wapborhan.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  const allTypes = [...new Set(allJobs?.map((job) => job.categories))];

  return (
    <div className="container lg:max-w-7xl px-4 mx-auto my-20">
      <div className="headtitle text-center mb-8 space-y-5">
        <h1 className="text-3xl"> New & Random Jobs</h1>
        <p className="text-base-500">
          Post a job to tell us about your project. {"We'll"} quickly match you
          with the right freelancers.
        </p>
      </div>
      {/* <div className="search-bar text-center mb-4">
        <input
          type="text"
          placeholder="Search by Job Title"
          value={searchTerm}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}
      <Tabs className=" w-full mx-auto text-center">
        <div className="tabs tabs-boxed inline-flex   justify-center items-center">
          <TabList>
            <Tab className="tab " key="all">
              All
            </Tab>
            {allTypes.map((categories, index) => (
              <Tab className="tab" key={index}>
                {categories}
              </Tab>
            ))}
          </TabList>
        </div>

        <TabPanel
          key="all"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
        >
          {allJobs.slice(0, 6).map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </TabPanel>
        {allTypes.map((categories, index) => (
          <TabPanel
            key={index}
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
          >
            {allJobs

              .filter((job) => job.categories === categories)
              .slice(0, 6)
              .map((job) => (
                <JobsCard key={job.id} job={job} />
              ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Jobs;
