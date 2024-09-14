import React from "react";
import "./how.css";

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="container max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:me-5">
            <div className="section-title">
              <h3 className="title text-3xl font-bold mb-4">How It Works</h3>
              <p className="text-muted mb-6">
                Post a job to tell us about your project. {"We'll"} quickly
                match you with the right freelancers.
              </p>
              <div className="process-menu nav flex-col space-y-5 md:flex-row">
                <div className="nav-link active" id="v-pills-home-tab">
                  <div className="flex items-start">
                    <div className="number flex-shrink-0 md:w-10 md:text-center">
                      1
                    </div>
                    <div className="flex-grow text-start ms-3">
                      <h5 className="fs-18 font-bold">Register an account</h5>
                      <p className="text-muted mb-0">
                        Due to its widespread use as filler text for layouts,
                        non-readability is of great importance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="nav-link" id="v-pills-profile-tab">
                  <div className="flex items-start">
                    <div className="number flex-shrink-0 md:w-10 md:text-center">
                      2
                    </div>
                    <div className="flex-grow text-start ms-3">
                      <h5 className="fs-18 font-bold">Find your job</h5>
                      <p className="text-muted mb-0">
                        There are many variations of passages of
                        avaibookmark-label, but the majority alteration in some
                        form.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="nav-link" id="v-pills-messages-tab">
                  <div className="flex items-start">
                    <div className="number flex-shrink-0 md:w-10 md:text-center">
                      3
                    </div>
                    <div className="flex-grow text-start ms-3">
                      <h5 className="fs-18 font-bold">Apply for job</h5>
                      <p className="text-muted mb-0">
                        It is a long-established fact that a reader will be
                        distracted by the readable content of a page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <img
                  src="/images/process-01.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
