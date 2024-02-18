"use client";
import Proj1 from "@/images/proj1.png"
import Proj2 from "@/images/Proj2.png"
import Proj3 from "@/images/proj3.png"
import Proj4 from "@/images/Proj4.png"
import Project from "../components/project";


export default function ProjectsPage() {
  return (
    <div className="w-full h-screen">
  

      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-primary text-3xl font-bold">Personal Projects</h1>
        <h2 className="text-white">These are my recent personal projects.</h2>

        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3">
          <Project 
            projectImg={Proj1}
            title={"Personal portfolio website"}
            description={"I created this personal website to showcase my current knowledge and skills"}
            frameworks={"Next JS, TailwindCSS"} repoLink={"https://github.com/seresaa/my-portfolio.git"}            />
            <Project 
            projectImg={Proj2}
            title={"Movie App"}
            description={"Simple Movie App using Flutter with API Integration using TMDB API "}
            frameworks={"Flutter"} repoLink={"https://github.com/seresaa/movieappflutter.git"}            />

          <Project 
            projectImg={Proj3}
            title={"Recipe App"}
            description={"Recipe web app using React JS with API Integration using TheMealDB API "}
            frameworks={"React js, TailwindCSS"} repoLink={"https://github.com/seresaa/Recipe_app.git"}            />

          <Project 
            projectImg={Proj4}
            title={"Pet Care Website Design"}
            description={"Pet care website design with reusable components "}
            frameworks={"Vite + React, TailwindCSS"} repoLink={"https://github.com/seresaa/Pet-Care.git"}            />

        </div>

        
      </div>
     
    </div>
  );
}
