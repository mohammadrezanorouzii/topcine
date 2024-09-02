import React, { useState, useEffect } from "react";
import BodyCards from "../BodyCards/BodyCards";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Body({ topMovies, nowMovies, upMovies }) {
  const [categoryNumber, setCategory] = useState(1);
  const [showMovies1, setShowMovies1] = useState(topMovies);
  const [showMovies2, setShowMovies2] = useState(topMovies);
  const [showMovies3, setShowMovies3] = useState(topMovies);
  const categories = ["TOP RATED", "NOW PLAYING", "POPULAR"];
  const [loading, setLoading] = useState({ top: false, now: false, popular: false });
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [n, setn] = useState(1);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setShowMovies1(response.results);
        setLoading((prevLoading) => ({ ...prevLoading, top: true }));
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setShowMovies2(response.results);
        setLoading((prevLoading) => ({ ...prevLoading, now: true }));
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setShowMovies3(response.results);
        setLoading((prevLoading) => ({ ...prevLoading, popular: true }));
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  return (
    <>
      <div className="w-4/5 mx-auto my-4 flex flex-row h-[40px] lg:space-x-16 md:space-x-10 sm:space-x-0">
        {categories.map((e, index) => {
          return (
            <>
              <div
                className={
                  categoryNumber === index + 1
                    ? "flex flex-row hover:cursor-pointer"
                    : "flex flex-row opacity-30 hover:opacity-60 hover:cursor-pointer"
                }
                onClick={() => {
                  setCategory(index + 1);
                }}
              >
                <div className="m-0 bg-primaryy h-full w-1"></div>
                <p className="text-textt xl:text-3xl my-auto ml-2 sm:text-lg md:text-2xl">
                  {e}
                </p>
              </div>
            </>
          );
        })}
      </div>

      {categoryNumber === 1 && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 
        lg:gap-x-[10%] mx-[10%] sm:grid-cols-1 md:gap-4 sm:gap-4">
          {loading.top ? <div className="min-w-[45%]">
            {showMovies1.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div> : <div className="min-w-[45%] skeleton"></div>}
          {loading.top ? <div className="min-w-[45%]">
            {showMovies1.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div> : <div className="min-w-[45%]"></div>}
        </div>
      )}

      {categoryNumber === 2 && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-x-[10%] mx-[10%] sm:grid-cols-1 md:gap-4 sm:gap-4">
          {loading.now ? <div className="min-w-[45%]">
            {showMovies2.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  id={obj.id}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div> : <div className="min-w-[45%]"></div>}
          {loading.now ? <div className="min-w-[45%]">
            {showMovies2.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div> : <div className="min-w-[45%]"></div>}
        </div>
      )}

      {categoryNumber === 3 && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-x-[10%] mx-[10%] sm:grid-cols-1 md:gap-4 sm:gap-4">
          {loading.popular ? <div className="min-w-[45%]">
            {showMovies3.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div> : <div className="min-w-[45%]"></div>}
          {loading.popular ? <div className="min-w-[45%]">
            {showMovies3.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div> : <div className="min-w-[45%]"></div>}
        </div>
      )}
      <div className="mt-12 flex justify-center border-primaryy text-textt space-x-2">
        <GrFormPrevious
          className=" w-8 h-8 bg-darkBackk border-0 rounded-sm mx-1 cursor-pointer shadow-[10px_10px_20px_rgba(0,0,0,0.25)]"
          onClick={() => {
            if (n > 1) {
              setn(n - 1);
            }
          }}
        />
        {btns.map((e) => {
          return (
            <button
              className={`cursor-pointer h-8 w-8 font-medium rounded text-lg shadow-[10px_10px_20px_rgba(0,0,0,0.25)] bg-darkBackk ${
                e === n ? "bg-primaryy font-semibold" : ""
              }`}
              onClick={() => {
                setn(e);
              }}
            >
              {e}
            </button>
          );
        })}
        <GrFormNext
          className=" w-8 h-8 bg-darkBackk border-0 rounded-sm mx-1 cursor-pointer shadow-[10px_10px_20px_rgba(0,0,0,0.25)]"
          onClick={() => {
            if (n < 10) {
              setn(n + 1);
            }
          }}
        />
      </div>
    </>
  );
}
