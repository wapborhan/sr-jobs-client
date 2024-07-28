const PopUp = () => {
  return (
    <div
      id="small-dialog-1"
      className="zoom-anim-dialog mfp-ready dialog-with-tabs"
    >
      <div className="utf-signin-form-part">
        <ul className="utf-popup-tabs-nav-item">
          <li className="modal-title">Accept Offer John Williams</li>
        </ul>
        <div className="utf-popup-container-part-tabs">
          <div className="utf-popup-tab-content-item" id="tab">
            <div className="utf-welcome-text-item">
              <div className="bid-acceptance margin-top-15">
                {" "}
                Offer Price :- $5000 - $6500
              </div>
            </div>
            <form id="terms">
              <div className="radio">
                <label for="radio-1">
                  <span className="radio-label"></span> I Have You Confirm That
                  You Accept <a href="#">Terms & Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
            </form>
            <button
              className="margin-top-15 button full-width utf-button-sliding-icon ripple-effect"
              type="submit"
              form="terms"
            >
              Accept Request Now <i className="icon-feather-chevrons-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
