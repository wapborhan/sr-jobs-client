import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { JobContex } from "../../../context/JobContext";
import JobsCard from "./JobsCard";

const Jobs = () => {
  const { allJobs } = useContext(JobContex);
  console.log(allJobs);

  const allTypes = [...new Set(allJobs?.map((job) => job.jobType))];

  // console.log(allTypes);
  return (
    <div className="container max-w-7xl mx-auto my-20">
      <div className="headtitle text-center mb-8 space-y-5">
        <h1 className="text-3xl"> New & Random Jobs</h1>
        <p className="text-base-500">
          Post a job to tell us about your project. We'll quickly match you with
          the right freelancers.
        </p>
      </div>
      <Tabs className=" w-full mx-auto text-center">
        <TabList className="tabs tabs-boxed inline-flex   justify-center items-center ">
          {allTypes.map((jobType, index) => (
            <Tab className="tab" key={index}>
              {jobType}
            </Tab>
          ))}
        </TabList>

        {allTypes.map((jobType, index) => (
          <TabPanel key={index} className="grid grid-cols-3 gap-5">
            {allJobs
              .filter((job) => job.jobType === jobType)
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
