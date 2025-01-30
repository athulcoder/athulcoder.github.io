import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const Button = ({ label }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#fff" }}
      transition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="font-montserrat text-[15x] text-center text-white  bg-accent rounded-xl py-3 px-5 mt-4 hover:bg-accent-hover "
    >
      {label}
    </motion.button>
  );
};

export default Button;
