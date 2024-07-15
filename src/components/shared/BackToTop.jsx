import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pxShow = 300;

  const handleScroll = () => {
    if (window.scrollY >= pxShow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="backtotop"
      className={isVisible ? "cursor-pointer visible" : "cursor-pointer"}
      onClick={scrollToTop}
      style={{ zIndex: 99 }}
    >
      <a style={{ zIndex: 0 }}></a>
    </div>
  );
};

export default BackToTop;
