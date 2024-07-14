const AppDownload = () => {
  return (
    <div
      className="utf-photo-section-block"
      data-background-image="images/section-background.jpg"
    >
      <div className="text-content white-font">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <h2>Download Browse Hundreds of Jobs</h2>
              <p>
                Lorem Ipsum is simply dummy text of printing and type setting
                industry. Lorem Ipsum been industry standard dummy text ever
                since, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic type
                setting, remaining essentially unchanged. It was popularised.
              </p>
              <ul className="utf-download-text">
                <li>
                  <a href="#" title="Windows App" data-tippy-placement="top">
                    <i className="icon-line-awesome-windows"></i>
                    <span>Windows</span>
                    <p>Available Now</p>
                  </a>
                </li>
                <li>
                  <a href="#" title="App Store" data-tippy-placement="top">
                    <i className="icon-line-awesome-apple"></i>
                    <span>App Store</span>
                    <p>Available Now</p>
                  </a>
                </li>
                <li>
                  <a href="#" title="Google Play" data-tippy-placement="top">
                    <i className="icon-line-awesome-android"></i>
                    <span>Google Play</span>
                    <p>Get in On</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="download-img">
                <img src="images/mockup3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
