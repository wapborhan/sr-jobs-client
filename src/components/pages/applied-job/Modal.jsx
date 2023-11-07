import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import ApplyJobDetails from "./ApplyJobDetails";

const Modal = ({ job }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className=" text-dark text-center block cursor-pointer rounded-full py-2 mb-4"
      >
        Job Details
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-7xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Applied Job</h3>
          <ApplyJobDetails job={job.job} />
        </div>
      </dialog>
    </>
  );
};

export default Modal;
