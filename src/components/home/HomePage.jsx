import Blogs from "../pages/blogs/Blogs";
import HowItWorks from "../pages/howWorks/HowItWorks";
import Jobs from "./job/Jobs";
import Banner from "./banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Jobs />
      <Blogs />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
