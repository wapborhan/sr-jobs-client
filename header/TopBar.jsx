const TopBar = () => {
  return (
    <div className="top-bar bg-[#f8f9fc] py-2">
      <div className="container max-w-7xl mx-auto">
        <div className="flex gap-5 items-center justify-between">
          <div className="left">Today</div>
          <div className="right">Dark</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
