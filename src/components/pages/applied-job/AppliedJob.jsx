import { useContext, useEffect, useState } from "react";
import ApplyCard from "./ApplyCard";
import { AuthContext } from "../../../Provider/AuthProvider";
import { usePDF } from "react-to-pdf";

const AppliedJob = () => {
  document.title = "SR Jobs | Applied Job";
  const [applyjobs, setApplyjobs] = useState([]);
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { toPDF, targetRef } = usePDF({ filename: "applied-jobs.pdf" });

  const url = `${import.meta.env.BACKEND_URL}/applied?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApplyjobs(data));
  }, [url]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const filteredJobsByCategory =
    selectedCategory === "All"
      ? applyjobs
      : applyjobs.filter((job) => job?.job?.categories === selectedCategory);
  return (
    <div className="w-full ">
      <div className="max-w-7xl lg:mx-auto mx-5 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-4"></div>
          <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
            <div className="flex items-center py-2">
              <select
                name="categories"
                className="input input-bordered w-full"
                onChange={handleCategoryChange}
              >
                <option value="All">All</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
                <option value="On Site">On Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
            <div className="d">
              <button
                className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                onClick={() => toPDF()}
              >
                Download PDF
              </button>
            </div>
          </div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200"
              ref={targetRef}
            >
              <table className="min-w-full">
                {/* <!-- HEAD start --> */}
                <thead>
                  <tr className=" border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">Name</th>
                    <th className="px-6 py-3 text-left font-medium">Email</th>

                    <th className="px-6 py-3 text-left font-medium">
                      Resume Link
                    </th>
                    <th className="px-6 py-3 text-left font-medium">
                      Categories
                    </th>

                    <th className="px-6 py-3 text-left font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="">
                  {filteredJobsByCategory.map((job) => (
                    <ApplyCard key={job._id} job={job} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
