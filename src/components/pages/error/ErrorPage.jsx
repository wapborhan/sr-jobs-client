import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen mx-auto flex justify-center text-center items-center">
      <div className="content lg:mx-0 mx-5 space-y-5">
        <img src="images/404.png" alt="" className="w-8/12 mx-auto" />
        <h1 className="lg:text-5xl text-3xl font-bold">PAGE NOT FOUND</h1>
        <h3 className="lg:text-2xl">
          The page your are looking for does not exist. It might have been moved
          or delete.
        </h3>

        <NavLink
          to="/"
          className="bg-[#766df4] uppercase text-white rounded-md inline-block py-2 px-5"
        >
          Go back Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
