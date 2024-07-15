import { useState } from "react";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "light" : "dark"
    );
  };
  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? <>{"☾"}</> : <> {"☼"}</>}
    </button>
  );
};

export default ToggleTheme;
