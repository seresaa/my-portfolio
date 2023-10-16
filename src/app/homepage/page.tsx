import Link from "next/link"
import Image from "next/image"
import Logo from "@/images/cherrylogo.png";
import { FaGithub } from 'react-icons/fa';
import MyImage from "@/images/me.jpg"


export default function Homepage(){
    return(
        <main className="h-screen w-screen bg-semiblack">
        <nav className="flex sm:items-stretch justify-between">
            <div className="flex">
                <Image
                src={Logo}
                alt="mylogo"
                width={200}
                height={50}
                priority={true} 
              
                />
            </div>
            <div className="hidden sm:ml-6 sm:block pr-14">
                <div className="flex mt-6">
                    <a href="#" className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                    
                </div>
            </div>

            <button className="text-primary pr-10">
                <FaGithub style={{ fontSize: '40px' }} />
            </button>
        </nav>

        <div className="h-[500px] w-full flex justify-center items-center">
            <div className="grid grid-cols-2">
                <h2 className="text-white text-[20px] col-span-3">Hello world, I'm Cherry</h2>
                <h1 className="text-[40px] font-bold">
                <span className="text-primary">Flutter</span>
                <span className="text-white"> Developer</span>
                </h1>
                <h2 className="text-white col-span-3">I'm a  CS student  with a passion for mobile app
                development <br></br> and I'm setting my sights on becoming a Flutter developer.</h2>
                <button type="button" className="mt-6 py-[10px] w-40 bg-primary hover:bg-primary-700 text-white font-bold rounded">
                    See my works
                </button>
                
            </div>
            <div className="relative inset-0 flex">
                <Image src={MyImage} alt={"MyImage"} className="h-[24rem] w-[25rem] rounded-full"></Image>
            </div>


        </div>



       

       </main>
    )
}