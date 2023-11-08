import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const ApplyCard = ({ job }) => {
  const { name, email, resume } = job;
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

      <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium">
        <Modal job={job} />
      </td>
    </tr>
  );
};

export default ApplyCard;
