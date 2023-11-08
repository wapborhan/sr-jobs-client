import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photourl = form.photourl.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // if (password.length < 6) {
    //   toast("Password is less than 6 characters");
    //   return;
    // } else if (!/[A-Z]/.test(password)) {
    //   toast("Password don't have a capital letter");

    //   return;
    // } else if (!/[!@#$%^&*()_+[\]{}|;:'"<>,.?/~`]/.test(password)) {
    //   toast("Password don't have a special character");
    //   return;
    // }

    createUser(email, password, photourl, name)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateProfile(user, {
          displayName: name,
          photoURL: photourl,
        });
        form.reset();
        navigate("/signin");
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast(errorMessage);
      });
  };
  return (
    <div className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between">
        <div className="mt-8 text-center">
          <NavLink to="/">
            <img src="/images/logo-dark.png" alt="" className="w-28 mx-auto" />
          </NavLink>
        </div>
        <div className="mt-8 text-center">
          <img src="/images/sign-up.png" alt="" className="w-10/12" />
        </div>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Photo URL
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Photo URL"
            name="photourl"
          />
        </div>
        <div className="mt-6">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
            name="name"
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
          />
        </div>
        <div className="mt-6">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Password
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="mt-6">
          <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="mt-8 text-center">
          Already a member ? <NavLink to="/signin">Sign In</NavLink>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
