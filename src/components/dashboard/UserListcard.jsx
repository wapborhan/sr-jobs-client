import { Link } from "react-router-dom";

const UserListcard = ({ user }) => {
  const { username, name, photoUrl, email, companyName, accountType } = user;

  return (
    <tr>
      <td>
        <img
          alt={name}
          className="img-fluid rounded-circle shadow-lg"
          src={photoUrl}
          width="50"
          height="50"
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{companyName}</td>
      <td>
        <span
          className={`badge badge-pill ${
            accountType === "candidate" ? "badge-danger" : "badge-primary"
          } text-capitalize`}
        >
          {accountType}
        </span>
      </td>
      <td>
        <Link to={`/dashboard/profile/${username}`} className="button gray">
          <i className="icon-feather-eye"></i> View Detail
        </Link>
      </td>
    </tr>
  );
};

export default UserListcard;
