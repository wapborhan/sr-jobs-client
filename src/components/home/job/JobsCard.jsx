import { NavLink } from "react-router-dom";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    picture,
    categories,
    salary,
    username,
    deadline,
    appnumber,
  } = job;
  console.log(job);
  return (
    <>
      <div className="card w-96 bg-base-100 mt-7 shadow-xl">
        <figure>
          {picture ? (
            <img src={picture} className="h-40" />
          ) : (
            <img src="/images/job-search.jpg" alt="Shoes" className="h-40" />
          )}
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title  uppercase font-bold">
            {title}
            <span className="bg-lime-500 font-normal text-[16px] capitalize text-white px-3 rounded-full">
              {categories}
            </span>
          </h2>
          <p>
            Salary : <span className="font-bold">{salary}</span>
          </p>
          <p>
            Applied : <span className="font-bold">{appnumber}</span>
          </p>
          <p>
            Deadline : <span className="font-bold">{deadline}</span>
          </p>
          <div className="card-actions justify-between mt-6 border-t-2 pt-4 items-center">
            <div className="post font-bold">Post : {username}</div>
            <NavLink
              to={`/job/${_id}`}
              className=" py-1 px-4 rounded-md btn-primary"
            >
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
