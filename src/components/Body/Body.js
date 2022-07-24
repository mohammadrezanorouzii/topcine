import React from "react";
import BodyCards from "../BodyCards/BodyCards";
import "./Body.css"

export default function Body({ movies }) {

  const movies1 = movies.slice(0, 10)
  const movies2 = movies.slice(10, 20)


    return (
      <div className="all-body">
        <div className="first-body">
          {movies1.map((obj) => {
            return (
              <BodyCards
                genre={obj.genre_ids}
                adult={obj.adult}
                name={obj.title}
                pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                imdb={Math.round(obj.vote_average * 10) / 10}
                date={obj.release_date.substr(0, 4)}
              />
            );
          })}
        </div>
        <div className="second-body">
          {movies2.map((obj) => {
            return (
              <BodyCards
                genre={obj.genre_ids}
                adult={obj.adult}
                name={obj.title}
                pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                imdb={Math.round(obj.vote_average * 10) / 10}
                date={obj.release_date.substr(0, 4)}
              />
            );
          })}
        </div>
      </div>
    );

}
