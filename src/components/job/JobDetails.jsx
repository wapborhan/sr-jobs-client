import { useLoaderData } from "react-router-dom";
import JobDetailsHead from "./JobDetailsHead";
import JobDetailsSidebar from "./JobDetailsSidebar";
import JobDetailsDesc from "./JobDetailsDesc";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <>
      <JobDetailsHead job={job} />
      <div className="container">
        <div className="row">
          <JobDetailsDesc job={job} />
          {/* <!-- Sidebar --> */}
          {job && <JobDetailsSidebar jobs={job} />}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
