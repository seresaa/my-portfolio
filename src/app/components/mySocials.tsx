import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const MySocials = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-3">
        <div className="flex space-x-2">
          <a
            href="mailto:cherry.mae.cantones.0813@gmail.com"
            className="ounded p-2"
          >
            <SiGmail
              className="h-8 w-8 text-white transition duration-300 transform group-hover:scale-110 hover:text-primary"
            />
          </a>
          <a
            href="https://www.facebook.com/cntnes.cherry"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded p-2"
          >
            <FaFacebookF
              className="h-8 w-8 text-white transition duration-300 transform group-hover:scale-110 hover:text-primary"
            />
          </a>
          <a
            href="https://www.instagram.com/cccherryoncake/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded p-2"
          >
            <FaSquareInstagram
              className="h-8 w-8 text-white transition duration-300 transform group-hover:scale-110 hover:text-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MySocials;
