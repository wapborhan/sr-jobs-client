import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateJob = () => {
  const job = useLoaderData();
  const { _id } = job;
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const picture = form.picture.value;
    const title = form.title.value;
    const categories = form.categories.value;
    const salary = form.salary.value;
    const postingDate = form.postingDate.value;
    const appnumber = form.appnumber.value;
    const deadline = form.deadline.value;
    const descriptoion = form.descriptoion.value;

    const updateData = {
      picture,
      title,
      categories,
      salary,
      postingDate,
      appnumber,
      deadline,
      descriptoion,
    };

    fetch(`http://localhost:3300/jobs/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Update Job Information");
        } else if (data.modifiedCount === 0) {
          toast("Nothing Modified");
        }
      });
  };
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="sect py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl"> Update Job</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form  mx-40 my-10 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Banner Picture URL
                  </span>
                </label>
                <input
                  type="text"
                  name="picture"
                  defaultValue={job?.picture}
                  placeholder="Banner Picture URL"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Job Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={job?.title}
                  placeholder=" Job Title"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="second flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">User Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Job Category</span>
                </label>
                <select
                  name="categories"
                  defaultValue={job?.categories}
                  className="input input-bordered w-full"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="On Site">On Site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Salary range</span>
                </label>
                <input
                  type="text"
                  name="salary"
                  defaultValue={job?.salary}
                  placeholder=" Salary range"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Job Posting Date</span>
                </label>
                <input
                  type="date"
                  name="postingDate"
                  defaultValue={job.postingDate}
                  placeholder=" Job Posting Date"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Job Applicants Number
                  </span>
                </label>
                <input
                  type="text"
                  name="appnumber"
                  defaultValue={job?.appnumber}
                  placeholder="Job Applicants Number"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Application Deadline
                  </span>
                </label>
                <input
                  type="date"
                  name="deadline"
                  defaultValue={job?.deadline}
                  placeholder="Application Deadline"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Job Description</span>
                </label>
                <textarea
                  type="text"
                  name="descriptoion"
                  defaultValue={job?.descriptoion}
                  placeholder=" Job Description"
                  className="input input-bordered w-full h-40"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Update Job"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
