import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "@fontsource/epilogue";

export default function MovieCards({ name, pic, imdb, date }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="lg:min-w-[28%] cursor-pointer relative grid ml-[4%] md:min-w-[44%] sm:min-w-[92%] min-w-[92%]"
      onMouseOver={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div className="m-0 w-full">
        <img className="rounded-xl" src={pic} alt={name} />
        {hovering ? (
          <div className="text-textt absolute z-1 rounded-b-xl w-full bottom-0 left-0 bg-custom-gradient animate-imgHover">
            <div className="mb-5">
              <p className="font-light text-3xl my-4 mx-4"> {name} </p>
              <div className="flex flex-row mx-4 text-xl h-5">
                <p className="mr-3 font-medium"> {date} </p>
                  <FaStar className="text-yellow-400 my-1"/>
                <div className="flex font-normal flex-row text-lg">
                  <p className="mx-1 font-normal"> IMDB : </p>
                  <p className=" "> {imdb} / 10</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
