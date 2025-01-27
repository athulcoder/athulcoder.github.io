const Button = ({ label }) => {
  return (
    <button className="font-montserrat text-[15x] text-center text-white  bg-accent rounded-xl py-3 px-5 mt-4 hover:bg-accent-hover ">
      {label}
    </button>
  );
};

export default Button;
