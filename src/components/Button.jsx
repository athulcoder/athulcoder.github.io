import { Link } from "react-router-dom";

const Button = ({ label }) => {
  return (
    <Link to="contact/">
      <button className="font-montserrat text-[15x] text-center text-white  bg-accent rounded-xl py-3 px-5 mt-4 hover:bg-accent-hover ">
        {label}
      </button>
    </Link>
  );
};

export default Button;
