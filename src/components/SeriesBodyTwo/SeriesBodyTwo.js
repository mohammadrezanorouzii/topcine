import React from "react";
import SeriesCardsTwo from "../SeriesCardsTwo/SeriesCardsTwo";

export default function SeriesBodyTwo({ series2 }) {

  return (
    <>
    <div className="carousel carousel-center
                   max-w-fit p-5 m-0">
      <div className="carousel-item "
       >
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
