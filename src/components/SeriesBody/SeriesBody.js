import React from "react";
import SeriesCards from "../SeriesCards/SeriesCards";

export default function SeriesBody({ series }) {
  return (
    <>
    <div className="overflow-hidden w-full">
      <div className="flex relative flex-row animate-animation mt-4"
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
