import moment from "moment";
import ToggleTheme from "../ToggleTheme";

const TopBar = () => {
  const date = new Date();
  return (
    <div className="top-bar lg:mx-0 px-5 border-b-2 py-2">
      <div className="container max-w-7xl mx-auto">
        <div className="flex gap-5 items-center justify-between">
          <div className="left">{moment(date).format("Do MMMM YYYY")}</div>
          <div className="right">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
