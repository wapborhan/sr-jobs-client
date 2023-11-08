import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddJob = () => {
  const [job, setJob] = useState();
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

    const inputData = {
      picture,
      title,
      username: user?.displayName,
      email: user?.email,
      userPhoto: user?.photoURL,
      categories,
      salary,
      postingDate,
      appnumber,
      deadline,
      descriptoion,
    };

    fetch("https://b8a11-server-side-wapborhan.vercel.app/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Job Added");
          setJob(data);
          form.reset();
        }
      });
  };
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="sect py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl"> Add Job</h2>
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
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Job Category</span>
                </label>
                <select
                  name="categories"
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
                  placeholder=" Job Description"
                  className="input input-bordered w-full h-40"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Add Job"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
