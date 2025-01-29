import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import "../index.css";
const ToggleButton = () => {
  const [dark, setDark] = useState(false);
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
        <MdOutlineLightMode className="w-[24px] h-[24px] text-secondary-text"></MdOutlineLightMode>
      </button>
    </div>
  );
};

export default ToggleButton;
