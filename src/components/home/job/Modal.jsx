import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Modal = ({ job }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;

    const inputData = {
      name,
      email,
      resume,
      job,
    };
    console.log(inputData);

    fetch("http://localhost:3300/applied", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Job Added");
          // setJob(data);
          form.reset();
        }
      });
  };
  return (
    <>
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="bg-teal-500 hover:bg-teal-600 text-white text-center block rounded-full py-2 mb-4"
      >
        Apply for this job
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                defaultValue={user?.displayName}
                name="name"
                disabled
              />
            </div>
            <div className="mt-6">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                disabled
              />
            </div>
            <div className="mt-6">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Resume Link
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Resume Link"
                name="resume"
              />
            </div>
            <div className="mt-6">
              <input
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg"
                value="Apply"
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
