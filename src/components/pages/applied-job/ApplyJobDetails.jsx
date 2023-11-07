import React from "react";

const ApplyJobDetails = ({ job }) => {
  console.log(job);
  const desc = job?.descriptoion?.split("\n");
  return (
    <main className="main bg-white px-6 md:px-16 py-6">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <div className="job-post w-full md:w-8/12">
          <div className="banner mb-5">
            <img src={job?.picture} alt="" className="w-full h-32" />
          </div>
          <div className="job-meta mb-4">
            <span className="text-xs text-gray-500">
              Posted: {job?.postingDate}
            </span>

            <h1 className="job-title text-3xl mb-5">{job?.title}</h1>

            <span className="job-type bg-teal-500 text-white p-1 text-xs mr-4">
              {job?.categories}
            </span>
          </div>

          <div className="job-description mb-4">
            <h3 className="text-xl mb-4">Descriotion</h3>
            {desc?.map((spec, index) => (
              <p className="my-2" key={index}>
                {spec}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full  md:block md:w-3/12">
          <div className="employer-info mb-4 text-center ">
            <img
              className="h-40 w-40 inline-block rounded-full"
              src={job?.userPhoto}
              alt=""
            />
            <div className="text-sm ">
              <h3 className="employer-name text-center text-2xl mt-4">
                {job?.username}
              </h3>
              <h3 className="employer-name text-left text-2xl mt-4">
                Salary Range: {job?.salary}
              </h3>{" "}
              <h3 className="employer-name text-left text-2xl mt-4">
                Deadline: {job?.deadline}
              </h3>{" "}
              <h3 className="employer-name text-left text-2xl mt-4">
                Applicient: {job?.appnumber}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplyJobDetails;
