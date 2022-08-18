import React, { useState } from "react";
import SeriesCardsTwo from "../SeriesCardsTwo/SeriesCardsTwo";
import "./SeriesBodyTwo.css";

export default function SeriesBodyTwo({ series2 }) {
  const [n, setN] = useState(-1000);

  setTimeout(() => {
    if (n === -1000) {
      setN(0)
    }
    setN(n + 1);
  }, 50);

  return (
    <>
    <div className="total2">
      <div className="series-slider2" style={{ left: `${n*0.1}%` }}>
        {series2.map((x) => {
          return (
            <SeriesCardsTwo
              pic={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
