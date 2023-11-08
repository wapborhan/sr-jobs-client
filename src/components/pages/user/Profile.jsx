import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import ProfileJobcard from "./ProfileJobcard";

const Profile = () => {
  document.title = "SR Jobs | Profile";
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);
  const [message, setMessage] = useState("");

  const url = `https://b8a11-server-side-wapborhan.vercel.app/myjobs?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyJobs(data))
      .catch((err) => {
        setMessage("Data couldn't be loaded. Please try again later.");
      });
  }, [url]);
  return (
    <div className="container max-w-7xl lg:mx-auto px-5 my-6">
      <div
        className="hero h-64  border-2 bg-cover bg-blue-400 h-112 rounded-t-lg"
        style={{
          backgroundImage:
            "url('https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg')",
        }}
      ></div>
      <div className=" border-2 shadow">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
          <div className="w-full lg:w-1/4 ">
            <img
              src={user?.photoURL}
              alt="logo"
              className="rounded-full border-2 h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24 ml-7 "
            />
          </div>
          <div className="w-full lg:w-1/2 py-8 lg:ml-0 ml-10">
            <ul className="list-reset flex gap-5">
              <li>
                <NavLink className="nav-link" to="/applied-jobs">
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/add-jobs">
                  Add A Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/my-jobs" className="nav-link">
                  My Jobs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4  flex my-4 lg:my-0 lg:justify-end items-center">
            <div className="mr-6">
              <button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full">
                Following
              </button>
            </div>
            <div>
              <a href="#" className="text-grey-dark">
                <i className="fa fa-ellipsis-v fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 lg:flex-row  text-sm leading-normal">
        <div className="w-full pl-4 lg:pl-0 pr-6 mt-8 mb-4 mx-7">
          <h1 className="mb-4">
            <span href="#" className="font-bold text-2xl">
              {user?.displayName}
            </span>
          </h1>
          <h1>
            <span href="#" className="  ">
              {user?.email}
            </span>
          </h1>

          <div className="mb-4 mt-6 flex flex-col space-y-4">
            <span className="text-teal">
              Acount Create: {user?.metadata?.creationTime}
            </span>
            <span className="text-teal">
              Last Login: {user?.metadata?.lastSignInTime}
            </span>
          </div>
        </div>
        <div className="w-full col-span-2  mb-4">
          <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
            <span className="text-black mr-6 no-underline hover-underline">
              My Jobs
            </span>
          </div>

          {myJobs?.map((job) => {
            return <ProfileJobcard job={job} key={job?._id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
