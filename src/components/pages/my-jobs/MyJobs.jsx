import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyJobCard from "./MyJobCard";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = myJobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  const url = `http://localhost:3300/myjobs?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyJobs(data))
      .catch((err) => {
        setMessage("Data couldn't be loaded. Please try again later.");
      });
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:3300/myjobs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myJobs.filter((booking) => booking._id !== id);
            setMyJobs(remaining);
          }
        });
    }
  };

  console.log(myJobs);
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-4"></div>
          <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
            <div className="flex items-center py-2">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-searcg"
                type="text"
                placeholder="Search"
                defaultValue={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center py-2">
              <NavLink
                to="/add-jobs"
                className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
              >
                Add Jobs
              </NavLink>
            </div>
          </div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                {/* <!-- HEAD start --> */}
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
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

                <tbody className="bg-white">
                  {/* {jobs?.map((job) => {
                return <JobCard key={job?._id} job={job} />;
              })} */}
                  {myJobs.length > 0 ? (
                    searchQuery === "" ? (
                      myJobs.map((job) => (
                        <MyJobCard
                          key={job._id}
                          job={job}
                          handleDelete={handleDelete}
                        />
                      ))
                    ) : (
                      filteredJobs.map((job) => (
                        <MyJobCard
                          key={job._id}
                          job={job}
                          handleDelete={handleDelete}
                        />
                      ))
                    )
                  ) : (
                    <>
                      <td colSpan={7} className="py-6 text-center">
                        {message}
                      </td>
                    </>
                  )}
                  {}
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

export default MyJobs;
