import { useEffect, useState } from "react";
import ApplyCard from "./ApplyCard";

const AppliedJob = () => {
  const [applyjobs, setApplyjobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/applied")
      .then((res) => res.json())
      .then((data) => setApplyjobs(data));
  }, []);
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-4"></div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                {/* <!-- HEAD start --> */}
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">Name</th>
                    <th className="px-6 py-3 text-left font-medium">Email</th>

                    <th className="px-6 py-3 text-left font-medium">
                      Resume Link
                    </th>

                    <th className="px-6 py-3 text-left font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {applyjobs.map((job) => (
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
