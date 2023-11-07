import { NavLink } from "react-router-dom";

const JobCard = ({ job }) => {
  const { _id, username, postingDate, title, categories, salary, deadline } =
    job;
  console.log(job);

  return (
    <tr>
      {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <input
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          type="checkbox"
        />
      </td> */}
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{username}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{postingDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {categories}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {salary}
      </td>{" "}
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {deadline}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium">
        <NavLink
          to={`/job/${_id}`}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
        >
          Show Details
        </NavLink>
      </td>
    </tr>
  );
};

export default JobCard;
