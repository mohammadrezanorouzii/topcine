import React, { useState } from "react";
import SeriesCards from "../SeriesCards/SeriesCards";
import "./SeriesBody.css";

export default function SeriesBody({ series }) {
  const [n, setN] = useState(0);

  setTimeout(() => {
    setN(n + 1);
  }, 50);

  return (
    <>
    <div className="total">
      <div className="series-slider" style={{ left: `-${n*0.2}%` }}>
        {series.map((x) => {
          return (
            <SeriesCards
              pic={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
