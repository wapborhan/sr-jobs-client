import React from "react";

const JobDetails = () => {
  return (
    <main className="main bg-white px-6 md:px-16 py-6">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <div className="job-post w-full md:w-8/12">
          <div className="job-meta mb-4">
            <span className="text-xs text-gray-500">
              Posted less than a minute ago
            </span>

            <h1 className="job-title text-2xl">
              Senior Mobile Developer for Flutter / Dart
            </h1>

            <span className="job-type bg-teal-500 text-white p-1 text-xs mr-4">
              Full-time
            </span>
            <span className="job-location text-xs">Chicago</span>
            <span className="remote-job text-xs ml-4">Remote Job</span>
          </div>

          <div className="admin-controls block md:hidden text-sm mb-4 border-t border-b py-2">
            <h5 className="text-gray-700 mb-2">Admin controls</h5>
            <div className="controls mb-2">
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1"
              >
                View
              </a>
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1"
              >
                Edit
              </a>
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1"
              >
                Delete
              </a>
            </div>
          </div>

          <div className="job-description mb-4">
            <h3 className="text-xl">Donec ullampcorper</h3>
            <p className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              doloribus qui perspiciatis id eius quaerat assumenda animi.
              Tempore quae, delectus nam consequuntur soluta velit adipisci
              voluptatem doloremque unde quos. Ipsa?
            </p>

            <p className="mb-2">
              Possimus laborum blanditiis iusto consectetur quam omnis,
              repellendus reprehenderit voluptatum. Voluptas soluta ipsum
              blanditiis, nesciunt commodi aliquam ea deleniti, natus, quibusdam
              assumenda quae ex saepe nisi cumque veniam architecto ratione.
            </p>

            <p>
              Possimus laborum blanditiis iusto consectetur quam omnis,
              repellendus reprehenderit voluptatum. Voluptas soluta ipsum
              blanditiis, nesciunt commodi aliquam ea deleniti, natus, quibusdam
              assumenda quae ex saepe nisi cumque veniam architecto ratione.
            </p>
          </div>
        </div>

        <div className="w-full hidden md:block md:w-3/12">
          <div className="employer-info mb-4 text-center ">
            <img
              className="h-40 w-40 inline-block"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
            <a href="#" className="text-sm hover:underline">
              <h3 className="employer-name text-center">Github</h3>
            </a>
          </div>

          <a
            href="#"
            className="bg-teal-500 hover:bg-teal-600 text-white text-center block rounded-full py-2 mb-4"
          >
            Apply for this job
          </a>

          <div className="admin-controls text-center text-sm">
            <h5 className="text-gray-700 mb-2">Admin controls</h5>
            <div className="controls">
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1"
              >
                View
              </a>
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1"
              >
                Edit
              </a>
              <a
                href="#"
                className="border border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetails;
