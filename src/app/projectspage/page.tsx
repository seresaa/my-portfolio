'use client';
import Navbar from "@/app/component/Navbar";
import Link from "next/link";
import Image from "next/image"
import Proj1 from '@/images/proj1.png'
import Proj2 from '@/images/proj2.png'
import { FaExternalLinkAlt } from 'react-icons/fa';


export default function ProjectsPage() {
  return (
    <main className="h-full w-full bg-semiblack">
  
      <Navbar /> 
      <div className="flex justify-center items-center text-[15px] text-white">
      <h1 className="text-[30px] font-bold">
                <span className="text-white">My Personal</span>
                <span className="text-primary"> Projects</span>
                </h1>
      </div>
      <div className="flex justify-center items-center text-white text-[15px]">
            <p> These are the personal projects i developed, feel free to explore</p>
         </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#373737] h-[430px] w-[450px] rounded-lg">
                <div className="mt-6 flex justify-center rounded-lg">
                    <Image src={Proj1} alt="Proj1" width={400} height={300} >
                    </Image>
                 </div>
                 <div className="m-6 text-white font-bold">
                    <h1>Portfolio Website</h1>
                 </div>
                 <div className="m-6 text-white text-[14px] font-thin ">
                    <p> I created this personal website to showcare my skills and past projects</p>
                 </div>
                 <div className="flex m-6 mt-10 grid grid-cols-2">
                    <div className="text-primary font-bold text-[14px]">
                        <p>Tailwind, NextJS</p>
                    </div>
                    <div className="text-primary ml-auto">
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </div>
                  </div>
                
            </div>

            <div className="bg-[#373737] h-[430px] w-[450px] rounded-lg">
                <div className="mt-6 flex justify-center rounded-lg">
                    <Image src={Proj2} alt="Proj1" width={400} height={300} >
                    </Image>
                 </div>
                 <div className="m-6 text-white font-bold">
                    <h1>Movie Mobile app</h1>
                 </div>
                 <div className="m-6 text-white text-[14px] font-thin ">
                    <p> Simple Movie app using flutter with REST API Integration, </p>
                 </div>
                 <div className="flex m-6 mt-auto grid grid-cols-2">
                    <div className="text-primary font-bold text-[14px]">
                        <p>Flutter, Dart</p>
                    </div>
                    <div className="text-primary ml-auto">
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </div>
                  </div>
                
            </div>

            <div className="bg-[#373737] h-[430px] w-[450px] rounded-lg">
                <div className="mt-6 flex justify-center rounded-lg">
                    <Image src={Proj1} alt="Proj1" width={400} height={300} >
                    </Image>
                 </div>
                 <div className="m-6 text-white font-bold">
                    <h1>Portfolio Website</h1>
                 </div>
                 <div className="m-6 text-white text-[14px] font-thin ">
                    <p> I created this personal website to showcare my skills and past projects</p>
                 </div>
                 <div className="flex m-6 mt-10 grid grid-cols-2">
                    <div className="text-primary font-bold text-[14px]">
                        <p>Tailwind, NextJS</p>
                    </div>
                    <div className="text-primary ml-auto">
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </div>
                  </div>
                
            </div>

            <div className="bg-[#373737] h-[430px] w-[450px] rounded-lg">
                <div className="mt-6 flex justify-center rounded-lg">
                    <Image src={Proj1} alt="Proj1" width={400} height={300} >
                    </Image>
                 </div>
                 <div className="m-6 text-white font-bold">
                    <h1>Portfolio Website</h1>
                 </div>
                 <div className="m-6 text-white text-[14px] font-thin ">
                    <p> I created this personal website to showcare my skills and past projects</p>
                 </div>
                 <div className="flex m-6 mt-10 grid grid-cols-2">
                    <div className="text-primary font-bold text-[14px]">
                        <p>Tailwind, NextJS</p>
                    </div>
                    <div className="text-primary ml-auto">
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </div>
                  </div>
                
            </div>

            <div className="bg-[#373737] h-[430px] w-[450px] rounded-lg">
                <div className="mt-6 flex justify-center rounded-lg">
                    <Image src={Proj1} alt="Proj1" width={400} height={300} >
                    </Image>
                 </div>
                 <div className="m-6 text-white font-bold">
                    <h1>Portfolio Website</h1>
                 </div>
                 <div className="m-6 text-white text-[14px] font-thin ">
                    <p> I created this personal website to showcare my skills and past projects</p>
                 </div>
                 <div className="flex m-6 mt-10 grid grid-cols-2">
                    <div className="text-primary font-bold text-[14px]">
                        <p>Tailwind, NextJS</p>
                    </div>
                    <div className="text-primary ml-auto">
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </div>
                  </div>
                
            </div>

            

            

            
        </div>
    </div>

    </main>
  );
}
