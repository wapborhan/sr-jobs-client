import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const UpdateProfile = () => {
  document.title = "SR Jobs | Update Profile";
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const updatename = form.get("name");
    const photo = form.get("photo");
    updateUser(updatename, photo)
      .then(() => {
        toast("Profile updated");
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-3/4 w-full mx-auto justify-center">
        <div className="card border-2 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
          <h2 className="text-center mt-7 lg:text-3xl text-[18px] font-bold">
            Update Your Profile
          </h2>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Type your Photo Url"
                defaultValue={user?.photoURL}
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-success"
                value="Update Profile"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
