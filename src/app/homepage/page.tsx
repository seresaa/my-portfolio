'use client';
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/images/cherrylogo.png";
import MyImage from "@/images/me1.jpg";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";
import MySocials from "../components/mySocials";

export default function Homepage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const SeeMyWorks = () => {
    return(
        <button 
        type="submit"
        className="text-[#FFFF] bg-primary right-2 py-2 px-4 rounded-lg text-md mr-6">
        See my works
        </button>
    );
}

  return (
    <div className="w-full h-screen">
            <Navbar />
            <div className="mt-2 flex flex-col items-center">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 items-center">
                    <div className="md:col-span-1 flex items-center">
                      <div className="m-6">
                        <h2 className="text-white text-[20px] col-span-3 ">Hello world, I'm Cherry</h2>
                        <span className="text-primary text-[40px] font-bold">Front-end</span>
                        <span className="text-white text-[40px] font-bold"> Developer</span>
                        <h1 className="text-[40px] font-bold" ></h1>
                        <h2 className="text-white col-span-3 mb-10">
                          I'm a CS student with a passion for web and mobile development <br></br> and I'm setting my sights on becoming a Front-end developer.</h2>
                          <SeeMyWorks/>
                          <MySocials/>

                        </div>
                    </div>
                    
                    <div className="md:col-span-1 flex flex-col items-center">
                      <Image src={MyImage} alt={"MyImage"} className="h-[24rem] w-[25rem] rounded-full"></Image>
                    </div>
                    

                </div>
                

               
            </div>
          
        </div>
  );
}
