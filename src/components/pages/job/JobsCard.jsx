import React from "react";
import { NavLink } from "react-router-dom";

const JobsCard = ({ job }) => {
  const { id, jobTitle, companyName, postingDate, jobType, salaryRange } = job;
  return (
    <>
      <div className="card mt-5 border-2 p-5">
        <div className=" ">
          <div className="company flex items-start">
            <img
              src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"
              alt=""
              className="w-32"
            />
          </div>
          <div className="content col-span-3 space-y-3 text-left">
            <h1 className="font-bold">{jobTitle}</h1>
            <h4>{companyName}</h4>
            <h2>{jobType}</h2>
            <h3>{salaryRange}</h3>
          </div>
          <div className="flex mt-6 pt-3 items-center border-t-2  justify-between">
            <div className="w">{postingDate}</div>
            <div className="w">
              <NavLink className="btn" to={`/job/${id}`}>
                Apply Now{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
