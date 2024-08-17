import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignIn = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;

        form.reset();
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
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;

        const userData = {
          username: user?.displayName.toLowerCase().replace(/\s+/g, ""),
          email: user?.email,
          name: user?.displayName,
          photoUrl: user?.photoURL,
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
                    Welcome Back Sign in to Continue
                  </h3>
                  <div>
                    {"Don't "}Have an Account?{" "}
                    <NavLink to="/signup">Sign Up!</NavLink>
                  </div>
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                  <div className="utf-no-border">
                    <input
                      className="utf-with-border"
                      type="email"
                      name="email"
                      defaultValue="test@gmail.com"
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
                      defaultValue="A@123456"
                      required
                    />
                  </div>
                  <div className="checkbox margin-top-10">
                    <input type="checkbox" id="two-step" />
                    <label htmlFor="two-step">
                      <span className="checkbox-icon"></span> Remember Me
                    </label>
                  </div>
                  <a href="forgot-password" className="forgot-password">
                    Forgot Password?
                  </a>
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

export default SignIn;
