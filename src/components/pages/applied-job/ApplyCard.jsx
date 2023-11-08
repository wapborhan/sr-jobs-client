import { NavLink } from "react-router-dom";

const ApplyCard = ({ job }) => {
  const { name, email, resume, _id } = job;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 ">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 ">{email}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          <a href={resume}>Resume Link</a>
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {job?.job?.categories}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium">
        <NavLink
          to={`/applied-jobs/${_id}`}
          className=" text-dark text-center block cursor-pointer rounded-full py-2 mb-4"
        >
          Job Details
        </NavLink>
      </td>
    </tr>
  );
};

export default ApplyCard;
