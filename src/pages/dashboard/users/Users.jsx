import { Link, useLoaderData } from "react-router-dom";
import UserListcard from "../../../components/dashboard/UserListcard";

const Users = () => {
  const allUsers = useLoaderData();

  console.log(allUsers);

  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="row">
        <div className="col-xl-12">
          <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
            <div className="headline">
              <h3>Users</h3>
            </div>
            <div className="dashboard-list-box table-responsive invoices with-icons">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Comapny</th>
                    <th>Account Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers &&
                    allUsers.map((user) => {
                      return <UserListcard key={user?._id} user={user} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
