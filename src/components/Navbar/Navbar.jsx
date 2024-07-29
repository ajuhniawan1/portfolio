"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "Projects",
    link: "/project",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-black text-white"
    >
      <div className="container flex items-center justify-between py-5 relative z-[9999]">
        {/* Logo Section */}
        <div className="">
          <Link href="/">
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] flex justify-center items-center bg-primary rounded-full text-white text-3xl font-bold">
                A
              </div>
              <h1 className="text-3xl font-bold text-white">nggi. J</h1>
            </div>
          </Link>
        </div>

        {/* Links Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`${
                      isActive
                        ? "text-primary text-xl font-bold hover:text-white"
                        : ""
                    } inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-300 hover:scale-110 hover:rounded`}
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn">
              <a
                href="https://drive.google.com/file/d/1OmyH45UrWNm2TZqgQADm28plyIO1LpdL/view?usp=sharing"
                download="Resume.pdf"
              >
                Get Resume
              </a>
            </button>
          </ul>
        </div>

        {/* Mobile menu Section */}
        <div className="md:hidden">
          <MdOutlineMenu
            onClick={toggleMenu}
            className="text-4xl cursor-pointer"
          />
        </div>
      </div>
      {/* Mobile sidebar menu */}
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </motion.nav>
  );
};

export default Navbar;
