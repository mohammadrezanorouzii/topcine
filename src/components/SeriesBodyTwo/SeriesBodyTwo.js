import React from "react";
import SeriesCardsTwo from "../SeriesCardsTwo/SeriesCardsTwo";

export default function SeriesBodyTwo({ series2 }) {

  return (
    <div className="overflow-hidden w-full">
      <div className="flex relative flex-row animate-animationtwo mt-4"
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
  );
}
