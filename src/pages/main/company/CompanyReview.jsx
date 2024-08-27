const CompanyReview = () => {
  return (
    <div className="utf-boxed-list-item margin-bottom-60">
      <div className="utf-boxed-list-headline-item">
        <h3>
          <i className="icon-material-outline-star-border"></i> Visitor Reviews
        </h3>
      </div>
      <ul className="utf-boxed-list-item-ul">
        <li>
          <div className="utf-boxed-list-item-item">
            <div className="item-content">
              <h4>
                John Williams <span>Software Developer</span>
              </h4>
              <a href="#" className="reply">
                <i className="icon-line-awesome-reply-all"></i> Reply
              </a>
              <div className="item-details margin-top-10">
                <div className="utf-detail-item">
                  <i className="icon-material-outline-date-range"></i> 12 Jan,
                  2021 - 11:00 AM
                </div>
                <div className="utf-star-rating" data-rating="5.0"></div>
              </div>
              <div className="utf-item-description">
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting.
                  Lorem Ipsum been industry standard dummy text ever when
                  unknown printer took a galley type scrambled.
                </p>
              </div>
            </div>
          </div>
        </li>
        <ul>
          <li>
            <div className="utf-boxed-list-item-item">
              <div className="item-content">
                <h4>
                  John Williams <span>Web Developer and PHP Developer</span>
                </h4>
                <a href="#" className="reply">
                  <i className="icon-line-awesome-reply-all"></i> Reply
                </a>
                <div className="item-details margin-top-10">
                  <div className="utf-detail-item">
                    <i className="icon-material-outline-date-range"></i> 12 Jan,
                    2021 - 04:00 PM
                  </div>
                  <div className="utf-star-rating" data-rating="5.0"></div>
                </div>
                <div className="utf-item-description">
                  <p>
                    Lorem Ipsum is simply dummy text of printing and type
                    setting. Lorem Ipsum been industry standard dummy text ever
                    when unknown printer took scrambled.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="utf-boxed-list-item-item">
              <div className="item-content">
                <h4>
                  John Williams <span>Web Developer and PHP Developer</span>
                </h4>
                <a href="#" className="reply">
                  <i className="icon-line-awesome-reply-all"></i> Reply
                </a>
                <div className="item-details margin-top-10">
                  <div className="utf-detail-item">
                    <i className="icon-material-outline-date-range"></i> 12 Jan,
                    2021 - 04:00 PM
                  </div>
                  <div className="utf-star-rating" data-rating="5.0"></div>
                </div>
                <div className="utf-item-description">
                  <p>
                    Lorem Ipsum is simply dummy text of printing and type
                    setting. Lorem Ipsum been industry standard dummy text ever
                    when unknown printer took scrambled.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <li>
          <div className="utf-boxed-list-item-item">
            <div className="item-content">
              <h4>
                John Williams <span>Software Developer</span>
              </h4>
              <a href="#" className="reply">
                <i className="icon-line-awesome-reply-all"></i> Reply
              </a>
              <div className="item-details margin-top-10">
                <div className="utf-detail-item">
                  <i className="icon-material-outline-date-range"></i> 12 Jan,
                  2021 - 11:00 AM
                </div>
                <div className="utf-star-rating" data-rating="5.0"></div>
              </div>
              <div className="utf-item-description">
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting.
                  Lorem Ipsum been industry standard dummy text ever when
                  unknown printer took a galley type scrambled.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="utf-boxed-list-item-item">
            <div className="item-content">
              <h4>
                John Williams <span>Web Developer and PHP Developer</span>
              </h4>
              <a href="#" className="reply">
                <i className="icon-line-awesome-reply-all"></i> Reply
              </a>
              <div className="item-details margin-top-10">
                <div className="utf-detail-item">
                  <i className="icon-material-outline-date-range"></i> 12 Jan,
                  2021 - 04:00 PM
                </div>
                <div className="utf-star-rating" data-rating="5.0"></div>
              </div>
              <div className="utf-item-description">
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting.
                  Lorem Ipsum been industry standard dummy text ever when
                  unknown printer took a galley type scrambled.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="utf-centered-button margin-top-35">
        {" "}
        <a
          href="#small-dialog"
          className="popup-with-zoom-anim button utf-button-sliding-icon"
        >
          Leave Your Review <i className="icon-feather-chevron-right"></i>
        </a>{" "}
      </div>
    </div>
  );
};

export default CompanyReview;
