'use client';
import Image from "next/image";
import MyImage from "@/images/me4.jpg";
import TabButton from "../components/tabButton";
import React, { useTransition, useState } from "react";


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 text-white">
          <li>HTML</li>
          <li>CSS</li>
          <li>React JS</li>
          <li>Next JS</li>
          <li>Typescript</li>
          <li>Flutter</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 text-white">
          <li>University of Makati, BSCS major in Application Development</li>
          <li>University of Makati, ICT </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2 text-white">
          <li>Comptia ITF+ Certified</li>
        </ul>
      ),
    },
  ];
  
  export default function About() {
    const [tab, setTab] = useState("skills");
  
    const handleTabChange = (id: string) => {
      setTab(id);
    };
  
    return (
      <div className="w-full h-screen">
        <div className="mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="md:col-span-1 flex flex-col items-center mx-4">
              <Image
                src={MyImage}
                alt={"MyImage"}
                className="m-h-[50] w-[30rem] rounded-lg"
              />
            </div>
            <div className="md:col-span-1 m-4 ">
              <h1 className="font-bold text-primary text-5xl mb-10 ">About me</h1>
              <h3 className="text-1xl text-[#FFFF]">
             I am a graduating student from the University of Makati, pursuing a Bachelor of Science in Computer Science
              with a major in Application Development. My academic journey has equipped me with a strong foundation in
               software development, and I am eager to transition into the software industry upon graduation. My passion
                lies in creating innovative solutions, particularly within the realm of front-end development. I
              </h3>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                  
                  
                >
                  {" "}
                  Certifications{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {tab === "skills" && TAB_DATA[0].content}
                {tab === "education" && TAB_DATA[1].content}
                {tab === "certifications" && TAB_DATA[2].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }