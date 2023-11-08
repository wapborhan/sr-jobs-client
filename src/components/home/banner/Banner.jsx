const Banner = () => {
  document.title = "SR Jobs | Homepage";
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage:
          "url(https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/09/10045333/Job-Searching-Online-11-Best-Practices-You-Need-to-Know-2-2.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl space-y-8">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Search Between More Then 10,000+ Open Jobs.
          </h1>
          <p className="mb-5">
            Find jobs, create trackable resumes and enrich your applications.
          </p>
          <div className="form-control w-full">
            {/* <div className="input-group w-full">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square w-40 bg-[#766df4] border-[#766df4] hover:bg-[#766df1] hover:border-[#766df1] text-white">
                Find Jobs
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
