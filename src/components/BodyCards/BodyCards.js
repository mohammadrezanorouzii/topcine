import React, { useState, useEffect } from "react";
import Star from "../../Icons/Star";
import Adult from "../../Icons/Adult";
import "@fontsource/epilogue";
import { Link } from "react-router-dom";

export default function BodyCards({
  name,
  pic,
  imdb,
  date,
  adult,
  genre,
  popularity,
  id,
}) {
  const [imdbIsTrue, setImdbIsTrue] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [genres, setGenres] = useState([]);

  const hoverClasses = [
    "hover:bg-[#de518e]",
    "hover:bg-[#A9619A]",
    "hover:bg-[#7570A7]",
    "hover:bg-[#4080B3]",
    "hover:bg-[#0b8fbf]",
  ];

  const falseHovering = () => {
    setHovering(false);
  };

  const trueHovering = () => {
    setHovering(true);
  };

  const genreName = genres
    .filter((item) => genre.includes(item.id))
    .slice(0, 5);

  useEffect(() => {
    const fetchGenres = async () => {
      if (imdb === 0) {
        setImdbIsTrue(false);
      }

      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=7a47242793d59eb1570389827de8affd&language=en-US",
          options
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGenres();
  }, [imdb]);

  return (
    <>
      <div
        className="card card-compact hover:shadow-zinc-900 pb-2 mb-12 rounded-lg bg-darkBackk text-textt w-full max-h-fit shadow-xl "
        onMouseOver={trueHovering}
        onMouseLeave={falseHovering}
      >
        <figure>
          <img src={pic} alt={name} className="w-full rounded-t-lg" />
          <div className="w-full absolute bottom-[160px]">
            {hovering && (
              <div className="h-24 flex bg-custom-gradient animate-imgHover text-xl">
                <div className="h-8 my-auto absolute flex flex-row bottom-1">
                  <p className="my-auto mx-2"> Popularity : </p>
                  <p className="my-auto"> {popularity} </p>
                </div>
                <div className="flex my-auto flex-row absolute bottom-1 h-8 right-2">
                  <Star className="my-auto mr-2" />
                  <p className="my-auto"> IMDB : </p>
                  {imdbIsTrue ? (
                    <p className="my-auto ml-2"> {imdb} / 10</p>
                  ) : (
                    <p className="my-auto ml-2"> Unknown </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </figure>
        <div className="card-body relative">
          <h2
            className="card-title m-0 text-textt font-normal text-2xl
                        w-full whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {name}
          </h2>
          <p className="text-xl font-thin m-0">{date}</p>
          <div className=" flex flex-row ">
            <div className="group flex flex-row mt-2 w-full space-x-2">
              {genreName.map((e, index) => (
                <p
                  key={index}
                  className={`text-textt p-2 rounded-xl hover:cursor-pointer 
                              max-w-fit border-textt border-solid font-medium
                              border-2 ${hoverClasses[index]}`}
                >
                  {e.name}
                </p>
              ))}
            </div>
            <button className="btn text-textt bg-primaryy p-2 hover:bg-gradient-to-r  hover:from-primaryy hover:via-purple-500 hover:to-secondaryy">
              <Link to={`/singlepage/${id}`}>See More</Link>
            </button>
          </div>
        </div>
        {adult && <Adult />}
      </div>
    </>
  );
}
