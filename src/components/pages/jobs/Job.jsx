import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import JobCard from "./JobCard";
import { usePDF } from "react-to-pdf";
import Loader from "../../loader/Loader";

const Job = () => {
  document.title = "SR Jobs | All Jobs";
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const { toPDF, targetRef } = usePDF({ filename: "jobs.pdf" });

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
    <div className="w-full ">
      <div className="max-w-7xl lg:mx-auto mx-5 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-4"></div>
          <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
            <div className="flex items-center py-2">
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-searcg"
                type="text"
                placeholder="Search"
                defaultValue={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center gap-5 py-2">
              <NavLink
                to="/add-jobs"
                className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
              >
                Add Job
              </NavLink>{" "}
              <button
                className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                onClick={() => toPDF()}
              >
                Download PDF
              </button>
            </div>
          </div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full" ref={targetRef}>
                {/* <!-- HEAD start --> */}
                <thead>
                  <tr className=" border-b border-gray-200 text-xs leading-4 uppercase tracking-wider">
                    {/* <th className="px-6 py-3 text-left font-medium">
                      <input
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </th> */}
                    <th className="px-6 py-3 text-left font-medium">
                      Posted By
                    </th>{" "}
                    <th className="px-6 py-3 text-left font-medium">
                      Posting Date
                    </th>
                    <th className="px-6 py-3 text-left font-medium">Title</th>
                    <th className="px-6 py-3 text-left font-medium">
                      Categories
                    </th>
                    <th className="px-6 py-3 text-left font-medium">
                      Salary Range
                    </th>
                    <th className="px-6 py-3 text-left font-medium">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-left font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="">
                  {/* {jobs?.map((job) => {
                    return <JobCard key={job?._id} job={job} />;
                  })} */}

                  {jobs.length > 0 ? (
                    searchQuery === "" ? (
                      jobs.map((job) => <JobCard key={job._id} job={job} />)
                    ) : (
                      filteredJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                      ))
                    )
                  ) : (
                    <td colSpan="7">
                      <Loader />
                    </td>
                  )}
                </tbody>
                {/* <!-- BODY end --> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
