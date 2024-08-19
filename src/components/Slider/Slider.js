import React from "react";

export default function Slider({ items }) {

  return (
    <>
      <div className="flex flex-row w-4/5 mx-auto my-5 h-[40px]">
        <div className="h-full bg-primaryy w-[5px]"></div>
        <p className="text-textt text-3xl my-auto mx-2"> TRENDING MOVIES </p>
      </div>

      {/* <div className="flex justify-center">
        <div className="w-[10%] flex relative hover:cursor-pointer">
          <div className="r-0 my-auto ml-16" onClick={perv}>
            <PervBtn />
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-md grid grid-cols-1">
          <div
            className="flex relative "
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

        <div className="w-[10%] flex relative">
          <div
            className="r-0 my-auto mr-16 hover:cursor-pointer"
            onClick={next}
          >
            <NextBtn />
          </div>
        </div>
      </div> */}
      <div className="carousel w-[80%] mx-36 border-none focus:border-none">
        {items.map((e) => {
          return (
            <>
              <div className="carousel-item border-none rounded-none">
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt={e.name}
                  className="w-full max-h-[560px] m-4 rounded-lg"
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
