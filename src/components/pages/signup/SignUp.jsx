import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photourl = form.photourl.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

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

    createUser(email, password, photourl, name)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photourl,
        });
        form.reset();
        navigate("/profile");
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
                      name="photourl"
                      placeholder="Photo URL"
                      required
                    />
                  </div>
                  <div className="utf-no-border">
                    <input
                      className="utf-with-border"
                      type="text"
                      placeholder="Full Name"
                      name="name"
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
