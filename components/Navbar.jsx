"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-black">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/athulcoder"
              className="cursor-pointer text-white text-primary underline hover:text-primary-foreground"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GrGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://github.com/athulcoder"
              className="cursor-pointer text-white text-primary underline hover:text-primary-foreground"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TbBrandLinkedin className="text-2xl text-white" />
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-300 dark:text-neutral-200"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full "
              >
                Github
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Linkeldn
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
