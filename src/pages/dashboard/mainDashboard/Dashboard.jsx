import useCompany from "../../../hooks/useCompany";
import useJobs from "../../../hooks/useJobs";

const Dashboard = () => {
  const allCompany = useCompany();
  const allJobs = useJobs({ jobCat: "all", jobSerch: "" });
  return (
    <div className="utf-dashboard-content-inner-aera">
      <div className="notification success closeable">
        <p>
          You are Currently Signed in as <strong>John Williams</strong> Has Been
          Approved!
        </p>
        <a className="close" href="#"></a>
      </div>
      <div className="utf-funfacts-container-aera">
        <div className="fun-fact" data-fun-fact-color="#2a41e8">
          <div className="fun-fact-icon">
            <i className="icon-feather-home"></i>
          </div>
          <div className="fun-fact-text">
            <h4>{allCompany.length}</h4>
            <span>Companies</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#36bd78">
          <div className="fun-fact-icon">
            <i className="icon-feather-briefcase"></i>
          </div>
          <div className="fun-fact-text">
            <h4>{allJobs.length}</h4>
            <span>Jobs</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#efa80f">
          <div className="fun-fact-icon">
            <i className="icon-feather-heart"></i>
          </div>
          <div className="fun-fact-text">
            <h4>549</h4>
            <span>Favourite Jobs</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#0fc5bf">
          <div className="fun-fact-icon">
            <i className="icon-brand-telegram-plane"></i>
          </div>
          <div className="fun-fact-text">
            <h4>120</h4>
            <span>Subscribe Plan</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#f02727">
          <div className="fun-fact-icon">
            <i className="icon-feather-trending-up"></i>
          </div>
          <div className="fun-fact-text">
            <h4>2250</h4>
            <span>Month Views</span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>User Statistics</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">
              <div className="chart">
                <canvas id="canvas" width="80" height="38"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>User Notes Activities</h3>
            </div>
            <div className="content">
              <div className="utf-header-notifications-content">
                <div className="utf-header-notifications-scroll" data-simplebar>
                  <ul className="utf-dashboard-box-list">
                    <li>
                      <span className="notification-icon">
                        <i className="icon-material-outline-group"></i>
                      </span>{" "}
                      <span className="notification-text">
                        <strong>Lorem Ipsum</strong> is simply dummy text of
                        printing and type setting industry. Lorem Ipsum been
                        industry standard dummy text.
                      </span>
                      <div className="utf-buttons-to-right">
                        <a
                          href="#"
                          className="button green ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit"></i>
                        </a>
                        <a
                          href="#"
                          className="button red ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon">
                        <i className="icon-feather-briefcase"></i>
                      </span>{" "}
                      <span className="notification-text">
                        <strong>Lorem Ipsum</strong> is simply dummy text of
                        printing and type setting industry. Lorem Ipsum been
                        industry standard dummy text.
                      </span>
                      <div className="utf-buttons-to-right">
                        <a
                          href="#"
                          className="button green ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit"></i>
                        </a>
                        <a
                          href="#"
                          className="button red ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon">
                        <i className="icon-feather-briefcase"></i>
                      </span>{" "}
                      <span className="notification-text">
                        <strong>Lorem Ipsum</strong> is simply dummy text of
                        printing and type setting industry. Lorem Ipsum been
                        industry standard dummy text.
                      </span>
                      <div className="utf-buttons-to-right">
                        <a
                          href="#"
                          className="button green ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit"></i>
                        </a>
                        <a
                          href="#"
                          className="button red ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon">
                        <i className="icon-material-outline-group"></i>
                      </span>{" "}
                      <span className="notification-text">
                        <strong>Lorem Ipsum</strong> is simply dummy text of
                        printing and type setting industry. Lorem Ipsum been
                        industry standard dummy text.
                      </span>
                      <div className="utf-buttons-to-right">
                        <a
                          href="#"
                          className="button green ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit"></i>
                        </a>
                        <a
                          href="#"
                          className="button red ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#small-dialog"
                className="popup-with-zoom-anim utf-header-notifications-button ripple-effect utf-button-sliding-icon"
              >
                User Add Notes <i className="icon-feather-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>Recent Jobs Activities</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong>{" "}
                    <a href="#">iOS Developers</a> Someone Downloaded Your
                    Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-feather-briefcase"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong>{" "}
                    <a href="#">iOS Developers</a> Someone Downloaded Your
                    Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-feather-briefcase"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong>{" "}
                    <a href="#">Software Engineer</a> Someone Downloaded Your
                    Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong> <a href="#">Logo Designer</a>{" "}
                    Someone Downloaded Your Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong> <a href="#">Logo Designer</a>{" "}
                    Someone Downloaded Your Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-feather-briefcase"></i>
                  </span>{" "}
                  <span className="notification-text">
                    {" "}
                    <strong>John Williams</strong> <a href="#">Web Designer</a>{" "}
                    Someone Downloaded Your Resume.
                  </span>
                  <div className="utf-buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
            <nav className="pagination">
              <ul>
                <li className="utf-pagination-arrow">
                  <a href="#" className="ripple-effect">
                    <i className="icon-material-outline-keyboard-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="current-page ripple-effect">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="ripple-effect">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="ripple-effect">
                    3
                  </a>
                </li>
                <li className="utf-pagination-arrow">
                  <a href="#" className="ripple-effect">
                    <i className="icon-material-outline-keyboard-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>All Order Invoices</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">
                      Afghanistan{" "}
                      <img
                        className="flag"
                        src="images/flags/af.svg"
                        alt=""
                        data-tippy-placement="top"
                        title="Afghanistan"
                        data-tippy=""
                      />
                    </div>
                    <strong>
                      John Williams <span className="paid">Paid Plan</span>{" "}
                    </strong>
                    <ul>
                      <li>
                        <span>Order ID:</span> 004312641
                      </li>
                      <li>
                        <span>Package:</span> Standard
                      </li>
                      <li>
                        <span>Date:</span> 12 Jan, 2021
                      </li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right">
                    {" "}
                    <a
                      href="invoice-template.html"
                      className="button gray"
                      title="Invoice"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-printer"></i> Invoice
                    </a>{" "}
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">
                      United States{" "}
                      <img
                        className="flag"
                        src="images/flags/us.svg"
                        alt=""
                        data-tippy-placement="top"
                        title="United States"
                        data-tippy=""
                      />
                    </div>
                    <strong>
                      John Williams <span className="paid">Paid Plan</span>
                    </strong>
                    <ul>
                      <li>
                        <span>Order ID:</span> 004312641
                      </li>
                      <li>
                        <span>Package:</span> Extended
                      </li>
                      <li>
                        <span>Date:</span> 18 Jan, 2021
                      </li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right">
                    {" "}
                    <a
                      href="invoice-template.html"
                      className="button gray"
                      title="Invoice"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-printer"></i> Invoice
                    </a>{" "}
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">
                      Australia{" "}
                      <img
                        className="flag"
                        src="images/flags/au.svg"
                        alt=""
                        data-tippy-placement="top"
                        title="Australia"
                        data-tippy=""
                      />
                    </div>
                    <strong>
                      John Williams <span className="unpaid">Unpaid Plan</span>
                    </strong>
                    <ul>
                      <li>
                        <span>Order ID:</span> 004312641
                      </li>
                      <li>
                        <span>Package:</span> Basic
                      </li>
                      <li>
                        <span>Date:</span> 06 Jan, 2021
                      </li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right">
                    {" "}
                    <a
                      href="invoice-template.html"
                      className="button red"
                      title="Remove"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-trash-2"></i> Remove
                    </a>{" "}
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">
                      Brazil{" "}
                      <img
                        className="flag"
                        src="images/flags/br.svg"
                        alt=""
                        data-tippy-placement="top"
                        title="Brazil"
                        data-tippy=""
                      />
                    </div>
                    <strong>
                      John Williams <span className="paid">Paid Plan</span>
                    </strong>
                    <ul>
                      <li>
                        <span>Order ID:</span> 004312641
                      </li>
                      <li>
                        <span>Package:</span> Standard
                      </li>
                      <li>
                        <span>Date:</span> 25 Jan, 2021
                      </li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right">
                    {" "}
                    <a
                      href="invoice-template.html"
                      className="button gray"
                      title="Invoice"
                      data-tippy-placement="top"
                    >
                      <i className="icon-feather-printer"></i> Invoice
                    </a>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
            <nav className="pagination">
              <ul>
                <li className="utf-pagination-arrow">
                  <a href="#" className="ripple-effect">
                    <i className="icon-material-outline-keyboard-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="current-page ripple-effect">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="ripple-effect">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="ripple-effect">
                    3
                  </a>
                </li>
                <li className="utf-pagination-arrow">
                  <a href="#" className="ripple-effect">
                    <i className="icon-material-outline-keyboard-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
            <div className="headline">
              <h3>Booking Packages</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="dashboard-list-box table-responsive invoices with-icons">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Profile</th>
                    <th>Plan Package</th>
                    <th>Expiry Plan</th>
                    <th>Payment Type</th>
                    <th>Status</th>
                    <th>View Booking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0431261</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Standard Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge badge-pill badge-primary text-uppercase">
                        Approved
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>0431262</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Extended Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Credit Card</td>
                    <td>
                      <span className="badge badge-pill badge-primary text-uppercase">
                        Approved
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>0431263</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Standard Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge badge-pill badge-danger text-uppercase">
                        Pending
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>0431264</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Basic Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge badge-pill badge-danger text-uppercase">
                        Pending
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>0431265</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Extended Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paywith Stripe</td>
                    <td>
                      <span className="badge badge-pill badge-danger text-uppercase">
                        Pending
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>0431266</td>
                    <td>
                      <img
                        alt=""
                        className="img-fluid rounded-circle shadow-lg"
                        src="images/thumb-1.jpg"
                        width="50"
                        height="50"
                        data-tippy-placement="top"
                        title="John Williams"
                        data-tippy=""
                      />
                    </td>
                    <td>Basic Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td>
                      <span className="badge badge-pill badge-canceled text-uppercase">
                        Canceled
                      </span>
                    </td>
                    <td>
                      <a href="#" className="button gray">
                        <i className="icon-feather-eye"></i> View Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
