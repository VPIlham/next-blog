import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  //   pengecheckan antara node dan web karena berbeda nilainya
  if (typeof localStorage == "undefined") {
    return false;
  }

  const value = localStorage.getItem("darkMode");
  return value == null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";
  console.log("[ThemeSwitch] darkmode : ", darkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* untuk tidak error karena seperti pergantian data */}
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
