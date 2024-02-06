'use client';
import Navbar from "@/app/component/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/images/cherrylogo.png";
import MyImage from "@/images/me.jpg";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";

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
    <div className="w-full bg-semiblack">
            <Navbar />
            <div className="mt-2">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 pb-20 justify-center items-center">
                    <div className="md:col-span-1 m-10 pl-10 ">
                      <div className="">

                    
                        <h2 className="text-white text-[20px] col-span-3 ">Hello world, I'm Cherry</h2>
                        <span className="text-primary text-[40px] font-bold">Front-end</span>
                        <span className="text-white text-[40px] font-bold"> Developer</span>
                        <h1 className="text-[40px] font-bold" ></h1>
                        <h2 className="text-white col-span-3 mb-10">
                          I'm a CS student with a passion for web and mobile development <br></br> and I'm setting my sights on becoming a Front-end developer.</h2>
                          <SeeMyWorks/>
                          </div>
                    </div>
                    
                    <div className="md:col-span-1 flex justify-center items-center">
                      <Image src={MyImage} alt={"MyImage"} className="h-[24rem] w-[25rem] rounded-full"></Image>
                    </div>

                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="md:col-span-1 flex justify-center items-center">
                          <Image src={MyImage} alt={"MyImage"} className="h-[24rem] w-[25rem] rounded-full"></Image>
                        </div>
                            <div className="md:col-span-1 ">
                                <h1 className="font-bold text-primary text-5xl flex justify-center items-center">Why choose us?</h1>
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
          
        </div>
  );
}
