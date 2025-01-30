import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
      <motion.button
        className="bg-primary-color p-2 rounded-full"
        onClick={handleClick}
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#fff" }}
        transition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <MdDarkMode className="w-[24px] h-[24px]  text-secondary-text"></MdDarkMode>
      </motion.button>
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
