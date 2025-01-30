import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import "../index.css";
import { useLocalStorage } from "react-use";
const ThemeModeButton = () => {
  // use localStorage to store the theme and will retrive if page is reloaded.
  const [dark, setDark] = useLocalStorage("dark", false);

  useEffect(() => {
    if (dark) {
      document.getElementById("root").classList.add("light");
      document.getElementById("root").classList.remove("dark");
    } else {
      document.getElementById("root").classList.add("dark");
      document.getElementById("root").classList.remove("light");
    }
  }, [dark]);

  const handleClick = () => {
    setDark(!dark);
  };
  return dark ? (
    <div>
      <button
        className="bg-primary-color p-2 rounded-full"
        onClick={handleClick}
      >
        <MdDarkMode className="w-[24px] h-[24px]  text-secondary-text"></MdDarkMode>
      </button>
    </div>
  ) : (
    <div>
      <button
        className="bg-primary-color p-2 rounded-full"
        onClick={handleClick}
      >
        <MdLightMode className="w-[24px] h-[24px] text-secondary-text"></MdLightMode>
      </button>
    </div>
  );
};

export default ThemeModeButton;
