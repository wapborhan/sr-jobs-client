import { useLoaderData, useNavigation } from "react-router-dom";
import JobDetailsHead from "./JobDetailsHead";
import JobDetailsSidebar from "./JobDetailsSidebar";
import JobDetailsDesc from "./JobDetailsDesc";

const JobDetails = () => {
  const job = useLoaderData();
  const { state } = useNavigation();

  console.log(state);

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
