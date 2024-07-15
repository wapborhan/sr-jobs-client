import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ job }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

    fetch(`${import.meta.env.BACKEND_URL}/applied`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Applied Succesfully");
          navigate("/applied-jobs");
          form.reset();
        }
      });
  };

  const postingDate = moment(new Date());
  const deadlineDate = moment(job?.deadline);

  const deadLine = () => {
    if (job.email === user.email) {
      toast("You cann't apply own job.");
    } else {
      toast("This Job Already Deadlined.");
    }
  };

  return (
    <>
      {postingDate < deadlineDate ? (
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="bg-teal-500  text-white text-center block rounded-full py-2 mb-4 px-4"
        >
          Apply for this job
        </button>
      ) : (
        <button
          onClick={deadLine}
          className="bg-teal-500  text-white text-center block rounded-full py-2 mb-4 px-4"
        >
          Apply for this job
        </button>
      )}
      <ToastContainer />
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
                required
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
