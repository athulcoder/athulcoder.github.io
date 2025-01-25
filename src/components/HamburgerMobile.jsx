import { Twirl as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { useState } from "react";
import { useClickAway } from "react-use";
import { routes } from "../routes/navLink";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const HamburgerMobile = () => {
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const [isOpen, setOpen] = useState(false);
  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger
        toggled={isOpen}
        size={24}
        duration={0.3}
        color="#fff"
        toggle={setOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ spring: 1, duration: 0.4 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-3 bg-primary-color border-b border-b-white/20 z-10 "
          >
            <ul className="grid gap-2">
              {routes.map((route) => {
                const { Icon } = route;

                return (
                  <li
                    key={route.title}
                    className="w-full p-[0.08rem] text-primary-text rounded-xl bg-background"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-secondary-color"
                      }
                      to={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl text-white" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMobile;
