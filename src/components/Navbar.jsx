import HamburgerMobile from "./HamburgerMobile";
import DesktopNav from "./DesktopNav";
import { LuCodeXml } from "react-icons/lu";
import NavContactCard from "./NavContactCard";
const Navbar = () => {
  return (
    <header className=" w-full bg-primary-color h-[60px] items-center flex ">
      <nav className="flex gap-30 items-center px-10  w-full justify-between max-sm:px-4">
        <div className="flex justify-center items-center">
          <LuCodeXml className="w-[40px] h-[40px] text-primary-text"></LuCodeXml>
        </div>

        <div className="flex lg:hidden cursor-pointer gap-5">
          <NavContactCard vision={false}></NavContactCard>
          <HamburgerMobile></HamburgerMobile>
        </div>
        <DesktopNav></DesktopNav>

        <NavContactCard vision={true}></NavContactCard>
      </nav>
    </header>
  );
};

export default Navbar;
