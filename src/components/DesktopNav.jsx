import { routes } from "../routes/navLink";
import { Link } from "react-router-dom";
const DesktopNav = () => {
  return (
    <div className="max-lg:hidden">
      <ul className="flex justify-center gap-10 text-sm items-center ">
        {routes.map((item) => (
          <li
            key={item.title}
            className=" hover:text-accent text-primary-text flex gap-3 justify-center items-center"
          >
            <item.Icon />
            <Link
              to={item.href}
              className=" flex gap-2 text-sm justify-center items-center font-montserrat font-semibold uppercase"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
