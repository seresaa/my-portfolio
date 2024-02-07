import Image from "next/image";
import Logo from "@/images/cherrylogo.png";
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbCherryFilled } from "react-icons/tb";




export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    
    <nav className="flex sm:items-stretch justify-between z-50">
    <button
    
  className={`md:hidden lg:hidden text-primary text-[30px] pl-5 ${
    isMenuOpen ? 'absolute top-0 left-0 p-5' : ''
  }`}
  onClick={toggleMenu}
>
  {isMenuOpen ? (
    <AiOutlineClose /> // Close button icon
  ) : (
    <GiHamburgerMenu /> // Hamburger Menu icon
  )}
</button>

      <div className="flex">
        <TbCherryFilled className="h-16 w-16 transition duration-300 transform group-hover:scale-110 text-primary ml-4 "/>
        <h1 className="mt-4 text-3xl text-primary font-bold">CM</h1>
      </div>


      <div className={`md:hidden lg:hidden ${isMenuOpen ? 'block' : 'hidden' }`}>
        <div className="flex flex-col justify-center text-center h-screen w-screen bg-semiblack text-white p-10 text-[20px]">
          <a href="/homepage" className="block py-2 text-sm">Home</a>
          <a href="#" className="block py-2 text-sm">About</a>
          <a href="/projectspage" className="block py-2 text-sm">Projects</a>
          <a href="#" className="block py-2 text-sm">Contact</a>
        </div>
      </div>

      <div className="hidden md:block lg:block pr-14">
        <div className="flex mt-6">
        <a href="/homepage" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
          <a href="/projectspage" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover-text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
        </div>
      </div>
      <a
        href="https://github.com/seresaa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary pr-10"
        >
          <FaGithub style={{ fontSize: '40px' }} />
      </a>

    </nav>
  );
}
