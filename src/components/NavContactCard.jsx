import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ToggleButton from "../components/ToggleButton";

const NavContactCard = ({ vision }) => {
  return (
    <>
      {vision ? (
        <div className="hidden lg:flex justify-center items-center gap-5 ">
          <ToggleButton></ToggleButton>
          <li className="flex justify-center  p-2 rounded-full ">
            <a href="https://github.com/athulcoder/" target="_blank">
              <FaGithub className="text-secondary-text w-6 h-6" />
            </a>
          </li>
          <li className="flex justify-center p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/athul-sabu-84360a261/"
              target="_blank"
            >
              <FaLinkedin className="text-secondary-text w-6 h-6" />
            </a>
          </li>
        </div>
      ) : (
        <div className="flex lg:hidden justify-center items-center gap-2 ">
          <ToggleButton></ToggleButton>

          <li className="flex justify-center  p-2 rounded-full ">
            <a href="https://github.com/athulcoder/" target="_blank">
              <FaGithub className="text-secondary-text w-6 h-6" />
            </a>
          </li>
          <li className="flex justify-center p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/athul-sabu-84360a261/"
              target="_blank"
            >
              <FaLinkedin className="text-secondary-text w-6 h-6" />
            </a>
          </li>
        </div>
      )}
    </>
  );
};

export default NavContactCard;
