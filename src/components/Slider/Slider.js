import React, { useState } from "react";
import MovieCards from "../MovieCards/MovieCards";
import PervBtn from "../../Icons/PervBtn";
import NextBtn from "../../Icons/NextBtn";

export default function Slider({ items }) {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < 6) {
      setPage(page + 1);
    }
    if (page === 5) {
      setPage(0);
    }
  };

  const perv = () => {
    if (page > -1) {
      setPage(page - 1);
    }
    if (page === 0) {
      setPage(5);
    }
  };

  return (
    <>
      <div className="flex flex-row w-4/5 mx-auto my-5 h-[40px]">
        <div className="h-full bg-primaryy w-[5px]"></div>
        <p className="text-textt text-3xl my-auto mx-2"> TRENDING MOVIES </p>
      </div>
      
      <div className="flex justify-center mb-5">
        <div className="w-[10%] flex justify-end">
          <div className="r-0 my-auto cursor-pointer" onClick={perv}>
            <PervBtn />
          </div>
        </div>
        <div className="w-full overflow-hidden grid grid-cols-1">
          <div
            className="flex relative"
            style={{
              left: `-${page * 96}%`,
              transition: "left 2s, transform 2s",
            }}
          >
            {items.map((obj) => {
              return (
                <MovieCards
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[10%] flex cursor-pointer" >
          <div
            className="r-0 my-auto"
            onClick={next}
          >
            <NextBtn />
          </div>
        </div>
      </div>
    </>
  );
}
