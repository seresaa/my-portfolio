'use client';
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Image from "next/image"
import Proj1 from '@/images/proj1.png'
import Proj2 from '@/images/proj2.png'
import { FaExternalLinkAlt } from 'react-icons/fa';
import Project from "../components/project";


export default function ProjectsPage() {
  return (
    <div className="w-full h-screen">
      <Navbar /> 

      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-primary text-3xl font-bold">Personal Projects</h1>
        <h2 className="text-white">these are my recent personal projects</h2>

        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3">
          <Project 
            projectImg={Proj1}
            title={"Personal portfolio website"}
            description={"I created this personal website to showcase my current knowledge and skills"}
            frameworks={"Next JS, TailwindCSS"}
            />
            <Project 
            projectImg={Proj2}
            title={"Movie App"}
            description={"Movie App using Flutter with RESTFUL API Integration. I used (TMDB API) "}
            frameworks={"Flutter"}
            />

          <Project 
            projectImg={Proj2}
            title={"Movie App"}
            description={"Movie App using Flutter with RESTFUL API Integration. I used (TMDB API) "}
            frameworks={"Flutter"}
            />



        </div>

        
      </div>
     
    </div>
  );
}
