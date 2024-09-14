import { Link } from "react-router-dom";

const AppliedCard = ({ job }) => {
  const { applierInf, jobInf } = job;
  console.log(job);

  return (
    <li>
      <div className="utf-manage-resume-overview-aera utf-manage-candidate">
        <div className="utf-manage-resume-overview-aera-inner">
          <div className="utf-manage-resume-avatar">
            <Link to={`/users/applierInf?._id`}>
              <img
                src={
                  applierInf ? applierInf?.photoUrl : "/images/user_big_1.jpg"
                }
                alt={applierInf?.name}
              />
            </Link>
          </div>
          <div className="utf-manage-resume-item">
            <h4>
              <Link to={`/job/${jobInf?._id}`}>{jobInf?.title}</Link>
              <span className="dashboard-status-button green">
                <i className="icon-material-outline-business-center"></i> Full
                Time
              </span>
            </h4>
            <span className="utf-manage-resume-detail-item">
              <i className="icon-feather-mail"></i> {applierInf?.email}
            </span>
            <span className="utf-manage-resume-detail-item">
              <i className="icon-feather-phone"></i> {applierInf?.number}
            </span>
            <span className="utf-manage-resume-detail-item">
              <i className="icon-material-outline-location-on"></i>{" "}
              {applierInf?.address}
            </span>
            <div className="utf-buttons-to-right">
              <Link
                to={`mailto:${applierInf?.email}`}
                className="popup-with-zoom-anim button ripple-effect"
                title="Send Message"
                data-tippy-placement="top"
              >
                <i className="icon-feather-mail"></i> Send
              </Link>
              <a
                href="#"
                className="button green ripple-effect ico"
                title="Download CV"
                data-tippy-placement="top"
              >
                <i className="icon-feather-download"></i>
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
          </div>
        </div>
      </div>
    </li>
  );
};

export default AppliedCard;
