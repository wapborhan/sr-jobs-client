import { useContext, useEffect, useState } from "react";
import ApplyCard from "./ApplyCard";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const AppliedJob = () => {
  const [applyjobs, setApplyjobs] = useState([]);
  const { user } = useContext(AuthContext);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const url = `https://b8a11-server-side-wapborhan.vercel.app/applied?email=${user?.email}`;
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
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
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
          </div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
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
                  {/* {applyjobs.map((job) => (
                    <ApplyCard key={job._id} job={job} />
                  ))} */}
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
