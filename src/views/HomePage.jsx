import AppDownload from "./AppDownload";
import Awards from "./Awards";
import Banner from "./Banner";
import HowWorks from "./HowWorks";
import JobCategories from "./JobCategories";
import FeatureJob from "./FeatureJob";

const HomePage = () => {
  document.title = "SR Jobs | Homepage";
  return (
    <>
      <Banner />
      <JobCategories />
      <FeatureJob />
      <AppDownload />
      <HowWorks />
      <Awards />
    </>
  );
};

export default HomePage;
