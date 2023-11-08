import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;

        form.reset();
        if (user) {
          navigate(location?.state ? location.state : "/profile");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location?.state ? location.state : "/profile");
        }
      })
      .catch((error) => {
        toast(error.message);
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
          <img src="/images/sign-in.png" alt="" className="w-10/12" />
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="">
          <div className="mt-6">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              defaultValue="borhanuddin4238@gmail.com"
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
              defaultValue="123456"
            />
          </div>
          <div className="mt-6">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>

          <ToastContainer />
        </form>
        <div className="mt-6">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={handleGoogleLogin}
          >
            Sign In With Google
          </button>
        </div>
        <div className="mt-8 text-center">
          {"  Don't"} have an account ? <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
