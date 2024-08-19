import React from "react";
import img1 from "../../pics/404.jpg";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="w-full relative h-screen m-0 p-0"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute top-52 right-52 flex flex-col gap-2">
        <p className="text-7xl font-black text-rose-950"> 404 ERROR </p>
        <div className="w-[405px] h-2 bg-rose-950"></div>
        <div className="flex justify-center flex-col w-[405px]">
          <p className="text-5xl font-mono mx-auto text-textt font-black">
            Page not found
          </p>
          <Link to="/"
          className="mx-auto w-1/2">
            <button
              className="hover:bg-red-950 text-xl rounded-lg w-full h-14 my-5 mx-auto bg-rose-950 text-textt "
            >
              GO HOME !
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
