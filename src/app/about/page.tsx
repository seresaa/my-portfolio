'use client';
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/images/cherrylogo.png";
import MyImage from "@/images/me.jpg";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    
    <div className="w-full h-screen">
            <Navbar />

            <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
                        <div className="md:col-span-1 flex flex-col items-center">
                          <Image src={MyImage} alt={"MyImage"} className="h-[24rem] w-[25rem] rounded-full"></Image>
                        </div>
                            <div className="md:col-span-1 flex flex-col items-center">
                                <h1 className="font-bold text-primary text-5xl">About me</h1>
                                <h3 className="text-1xl p-10 text-[#FFFF]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sagittis sapien.
                                 Nullam tincidunt auctor  mauris non molestie. Orci varius natoque penatibus et magnisquis malesuada mauris
                                 dis parturient montes, nascetur  ridiculus mus. Praesent quis enim odio. Aliquam vitae vehicula eros
                            
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-4">
                                    <div className="md:col-span-1 flex  justify-center items-center ">
                                        <div className="h-50 w-[350px] p-4 bg-primary flex rounded-md justify-center items-center">
                                            <FaPeopleRoof size={50} style={{color: "white"}}/>
                                            <h2 className="pl-10 font-bold text-[#FFFF] ">100+ Staff and employee</h2>
                                        
                                        </div>

                                    </div>
                                    <div className="md:col-span-1 flex justify-center items-center ">
                                        <div className="h-50 w-[350px] p-4 bg-primary flex rounded-md justify-center items-center">
                                            <RiUserFollowLine size={50} style={{color: "white"}}/>
                                            <h2 className="pl-10 font-bold text-[#FFFF] ">10k Subscriber</h2>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>  

                    </div>

                </div>
          
          
        </div>
  );
}
