import React from "react";
import { NavLinks } from "./Navbar";
import Link from "next/link";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div className="md:hidden">
      <div
        className={`${
          showMenu ? "left-0" : "top-[100%]"
        } fixed top-0 left-0 z-[999] bg-black text-white h-screen w-[75%] pt-20 pl-10 duration-300 md:hidden rounded-r-xl shadow-md flex flex-col justify-between`}
      >
        {/* Menu Section */}
        <div className="mt-10">
          <ul>
            {NavLinks.map((link) => {
              return (
                <li key={link.id} className="py-6">
                  <Link
                    href={link.link}
                    className="text-white text-2xl font-medium"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Menu Footer Section */}
        <div>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/anggi-juhniawan-077993158/"
              target="_blank"
              className="text-white text-xl font-medium hover:text-primary transition-all duration-300"
            >
              Anggi Juhniawan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
