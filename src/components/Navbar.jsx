import { codeICON } from "../assets/icons";

import HamburgerMobile from "./HamburgerMobile";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  return (
    <header className=" w-full bg-primary-color h-[60px] items-center flex ">
      <nav className="flex gap-40 items-center px-10  w-full justify-between max-sm:px-4">
        <div className="w-[40px] h-[40px]">
          <img src={codeICON} className="w-[40px] h-[40px]" />
        </div>

        <div className="flex lg:hidden cursor-pointer gap-5">
          <div className="flex  lg:hidden justify-center items-center gap-5 ">
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
          <HamburgerMobile></HamburgerMobile>
        </div>
        <DesktopNav></DesktopNav>

        <div className="hidden  lg:flex justify-center items-center gap-5 ">
          <li className="flex justify-center cursor-pointer  p-2 rounded-full ">
            <a href="https://github.com/athulcoder/" target="_blank">
              <FaGithub className="text-secondary-text w-6 h-6 hover:text-accent" />
            </a>
          </li>
          <li className="flex justify-center cursor-pointer  p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/athul-sabu-84360a261/"
              target="_blank"
            >
              <FaLinkedin className="text-secondary-text w-6 h-6 hover:text-accent" />
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
