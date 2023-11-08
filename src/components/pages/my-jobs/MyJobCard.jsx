import { NavLink } from "react-router-dom";

const MyJobCard = ({ job, handleDelete }) => {
  const { _id, username, postingDate, title, categories, salary, deadline } =
    job;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 ">{username}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 ">{postingDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 ">{title}</div>
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
      <td className="px-6 py-4 whitespace-no-wrap flex gap-4 text-left border-b border-gray-200 text-sm leading-5 font-medium">
        <NavLink
          to={`/job/${_id}`}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
        >
          Details
        </NavLink>
        <NavLink
          to={`/update-job/${_id}`}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
        >
          Update
        </NavLink>
        <button
          onClick={() => handleDelete(_id)}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
        >
          Delate
        </button>
      </td>
    </tr>
  );
};

export default MyJobCard;
