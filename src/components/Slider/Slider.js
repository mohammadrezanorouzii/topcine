import React, { useState } from "react";
import MovieCards from "./../MovieCards/MovieCards";
import "./Slider.css";
import PervBtn from "../Icons/PervBtn"
import NextBtn from "../Icons/NextBtn";

export default function Slider({ items }) {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < 7) {
      setPage(page + 1);
    }
    if (page === 6){
      setPage(0)
    }
  };

  const perv = () => {
    if (page > -1) {
      setPage(page - 1);
    }
    if (page === 0){
      setPage()
    }
  };

  return (
    <div className="all-container">

      <div onClick={perv} className="perv"> <PervBtn/>  </div>

      <div className="container-slider">
        <div className="slider" style={{ left: `-${page * 94.5}%` }}>
          {items.map((obj) => {
            return (
              <MovieCards
              name={obj.title}
              pic={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
              />
              );
            })}
        </div>       
      </div>

      <div onClick={next} className="next"> <NextBtn/> </div>  

    </div>
  );
}
