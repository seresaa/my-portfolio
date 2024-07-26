"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "../images/landingImg.png";
import MySocials from "../app/components/mySocials";

const ContactMe = () => {
  const emailAddress = "cherry.mae.cantones.0813@gmail.com";

  return (
    <a href={`mailto:${emailAddress}`}>
      <button className="px-6 py-2 bg-primary rounded-md text-white">
        Contact me
      </button>
    </a>
  );
};

export default function Homepage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="w-full h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 items-center">
          <motion.div
            className="md:col-span-1 flex items-center"
            variants={containerVariants}
          >
            <div className="m-6">
              <h2 className="text-white text-[20px] col-span-3 ">
                Hello world, I am Cherry
              </h2>
              <span className="text-primary text-[40px] font-bold">
                Front-end
              </span>
              <span className="text-white text-[40px] font-bold">
                {" "}
                Developer
              </span>
              <h1 className="text-[40px] font-bold"></h1>
              <h2 className="text-white col-span-3 mb-10">
                I am a fresh graduate with a degree of BS in Computer Science with a
                passion for web and mobile development <br></br> and I am
                setting my sights on becoming a Front-end developer.
              </h2>
              <ContactMe />

              <MySocials />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            variants={containerVariants}
          >
            <Image
              src={MyImage}
              alt={"MyImage"}
              className="h-[24rem] w-[25rem] rounded-full"
            ></Image>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
