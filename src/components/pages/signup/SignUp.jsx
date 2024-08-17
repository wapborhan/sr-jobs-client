import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    if (username.length < 5) {
      toast("Username is less than 5 characters");
      return;
    } else if (/\s/.test(username)) {
      toast("Username contains a space, which is not allowed");
      return;
    } else if (/[A-Z]/.test(username)) {
      toast("Username must not contain uppercase letters");
      return;
    } else if (/[^a-z0-9]/.test(username)) {
      toast("Username contains invalid characters.");
      return;
    }

    if (password.length < 6) {
      toast("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password don't have a capital letter");

      return;
    } else if (!/[!@#$%^&*()_+[\]{}|;:'"<>,.?/~`]/.test(password)) {
      toast("Password don't have a special character");
      return;
    }

    createUser(email, password, username)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: username,
        });

        const userData = {
          username: username,
          email: user?.email,
          name: "",
          photoUrl: "",
          accountType: "candidate",
          companyName: "",
          address: "",
          bio: "",
          socialLinks: [],
          userType: "user",
        };

        axiosPublic
          .post(`/users`, userData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });

        form.reset();
        const encodedEmail = btoa(user?.email);
        navigate(`/dashboard/profile?email=${encodedEmail}`);
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
        const encodedEmail = btoa(user?.email);
        if (user) {
          navigate(
            location?.state
              ? location.state
              : `/dashboard/profile?email=${encodedEmail}`
          );
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center gradient"
        style={{ height: "100vh", marginBottom: 0 }}
        id="titlebar"
      >
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="utf-login-register-page-aera margin-bottom-50">
                <div className="utf-welcome-text-item">
                  <NavLink to="/">
                    <img
                      src="/images/logo-dark.png"
                      alt=""
                      className="w-28 mx-auto"
                    />
                  </NavLink>
                  <h3 style={{ marginTop: "25px" }}>
                    Welcome Back Sign Up to Continue
                  </h3>
                  <div>
                    Already a member ? <NavLink to="/signin">Sign In!</NavLink>
                  </div>
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                  <div className="utf-no-border">
                    <input
                      className="utf-with-border"
                      type="text"
                      placeholder="User Name"
                      name="username"
                      required
                    />
                  </div>
                  <div className="utf-no-border">
                    <input
                      className="utf-with-border"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="utf-no-border">
                    <input
                      type="password"
                      className="utf-with-border"
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </div>
                </form>
                <button
                  className="button full-width utf-button-sliding-icon ripple-effect margin-top-10"
                  type="submit"
                  form="login-form"
                >
                  Log In <i className="icon-feather-chevron-right"></i>
                </button>
                <div className="utf-social-login-separator-item">
                  <span>Or Login in With</span>
                </div>
                <div className="utf-social-login-buttons-block">
                  <button
                    className="google-login ripple-effect"
                    onClick={handleGoogleLogin}
                  >
                    <i className="icon-brand-google"></i> Google+
                  </button>
                  <button className="twitter-login ripple-effect">
                    <i className="icon-brand-twitter"></i> Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
