const ProfileJobcard = ({ user, job }) => {
  const { photoURL, displayName } = user;
  const {
    _id,

    postingDate,
    title,
    picture,
    categories,
    salary,
    deadline,
    appnumber,
    descriptoion,
  } = job;
  const desc = job?.descriptoion?.split("\n").slice(0, 3);
  console.log(job);
  return (
    <div className="flex border-2 rounded-md shadow-md mt-5 gap-3 border-b border-solid border-grey-light">
      <div className="w-1/8 text-right pl-3 pt-3">
        <div>
          <img
            src={photoURL}
            alt="avatar"
            className="rounded-full h-12 w-12 mr-10"
          />
        </div>
      </div>
      <div className="w-7/8 p-3 pl-0">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text-black">{displayName}</span>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <p className="mb-6">{postingDate}</p>
            <p className="mb-6 font-bold flex gap-4 ">
              <span className=" bg-slate-500 flex-row py-1 px-3 rounded-full text-center text-white">
                {categories}
              </span>
              <span className="bg-pink-500 py-1 px-3 rounded-full text-center text-white">
                Deadline: {deadline}
              </span>
              <span className="bg-green-500 py-1 px-3 rounded-full text-center text-white">
                Applied: {appnumber}
              </span>
              <span className="bg-purple-500 py-1 px-3 rounded-full text-center text-white">
                Salary range: {salary}
              </span>
            </p>
            <p>
              <a href="#">
                <img
                  src={picture}
                  alt="tweet image"
                  className="border w-full h-40 border-solid border-grey-light rounded-md"
                />
              </a>
            </p>
            <p className="mb-6 font-bold mt-4 uppercase">{title}</p>
            <p className="mb-6  mt-4 ">
              {" "}
              {desc?.map((spec, index) => (
                <p className="my-2" key={index}>
                  {spec}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileJobcard;
