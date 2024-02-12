"use client"
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { TbCherryFilled } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./navlink";



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projectspage" },
    
 
  ];

  return (
    <nav className="mx-auto top-0 left-0 right-0 z-10 bg-semiblack mt-4">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <TbCherryFilled className="pl-4 h-12 w-12 md:w-16 md:h-16 text-primary md:ml-0 cursor-pointer" />
        </Link>
        <div className="mobile-menu block md:hidden m-4">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <MdOutlineMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <IoCloseSharp className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}  />
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://github.com/seresaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary mt-4 hidden md:block lg:block pr-6"
        >
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
