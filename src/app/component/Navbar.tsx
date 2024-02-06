import Image from "next/image";
import Logo from "@/images/cherrylogo.png";
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";



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
        <Image
          src={Logo}
          alt="mylogo"
          width={200}
          height={50}
          priority={true}
        />
      </div>

      <div className={`md:hidden lg:hidden ${isMenuOpen ? 'block' : 'hidden' }`}>
        <div className="flex flex-col text-center h-screen w-screen bg-gray-900 text-white p-10">
          <a href="/homepage" className="block py-2 text-sm">Home</a>
          <a href="#" className="block py-2 text-sm">About</a>
          <a href="/projectspage" className="block py-2 text-sm">Projects</a>
          <a href="#" className="block py-2 text-sm">Contact</a>
        </div>
      </div>

      <div className="hidden md:block lg:block pr-14">
        <div className="flex mt-6">
        <a href="/homepage" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
          <a href="/projectspage" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover-text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
        </div>
      </div>
      <button className="text-primary pr-10">
        <FaGithub style={{ fontSize: '40px' }} />
      </button>
    </nav>
  );
}
