import React, { useState } from "react";
import MovieCards from "./../MovieCards/MovieCards";
import "./Slider.css";
import PervBtn from "../Icons/PervBtn";
import NextBtn from "../Icons/NextBtn";

export default function Slider({ items, movies }) {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < 7) {
      setPage(page + 1);
    }
    if (page === 6) {
      setPage(0);
    }
  };

  const perv = () => {
    if (page > -1) {
      setPage(page - 1);
    }
    if (page === 0) {
      setPage(6);
    }
  };

  return (<>

    <div className="trending-container">
      <div className="line"></div>
      <p className="trending"> TRENDING MOVIES </p> 
    </div>

    <div className="all-container">

      <div className="perv">
        <div className="pervv" onClick={perv}> <PervBtn /> </div>
      </div>

      <div className="container-slider">
        <div className="slider" style={{ left: `-${page * 96}%` }}>
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

      <div className="next">
        <div className="nextt" onClick={next}> <NextBtn /> </div>
      </div>

    </div>
    </>
  );
}
