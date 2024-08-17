import React from "react";
import SeriesCards from "../SeriesCards/SeriesCards";

export default function SeriesBody({ series }) {
  return (
    <>
    <div className="carousel carousel-center
                   max-w-fit p-5 m-0">
      <div className="carousel-item "
       >
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
