import React from "react";
import Twitter from "../../Icons/Twitter";
import Linkedin from "../../Icons/Linkedin";
import Github from "../../Icons/Github";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="mt-20 w-full flex justify-center border-t-2 py-10  border-textt">
        <div className="flex flex-row space-x-10">
          <div className="flex justify-center items-center w-16 rounded-full h-16 shadow-[10px_10px_20px_rgba(0,0,0,0.25)] hover:bg-secondaryy duration-500">
            <Link to="https://x.com/mamarezza__">
              <Twitter />
            </Link>
          </div>
          <div className="flex justify-center items-center w-16 rounded-full h-16 shadow-[10px_10px_20px_rgba(0,0,0,0.25)] hover:bg-secondaryy duration-500">
            <Link to="https://www.linkedin.com/in/mohammadreza6/">
              <Linkedin />
            </Link>
          </div>
          <div className="flex justify-center items-center w-16 rounded-full h-16 shadow-[10px_10px_20px_rgba(0,0,0,0.25)] hover:bg-secondaryy duration-500">
            <Link to="https://github.com/mohammadrezanorouzii/">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
