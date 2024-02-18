import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectProps{
    projectImg: StaticImageData;
    title: string;
    description: string;
    frameworks: string;
    repoLink: string;
}

const Project: React.FC<ProjectProps> = ({projectImg, title, description, frameworks, repoLink}) => {

    const RepositoryButton = () => (
        <button className="px-6 py-2 bg-primary rounded-md m-4 text-white" onClick={() => window.open(repoLink)}> Repository</button>
    )

    return (
        <div className="m-6">
            <div className="bg-lightblack p-4 h-auto rounded-lg">
                <Image src={projectImg} alt="Projectimage"/>
                <h1 className="font-bold text-white pt-6">{title}</h1>
                <h2 className="text-[14px] text-white font-light mt-6">{description}</h2>

                <div className="flex justify-between ">
                    <h3 className="pt-6 font-bold text-primary">{frameworks}</h3> 
                    < RepositoryButton/>
                </div>
               
            </div>

        </div>
      );
}
 
export default Project;