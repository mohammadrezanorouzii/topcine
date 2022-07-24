import React, { useState, useEffect } from "react";
import Star from "../Icons/Star";
import Adult from "../Icons/Adult";
import "./BodyCards.css";

export default function BodyCards({ name, pic, imdb, date, adult, genre }) {
  const [imdbIsTrue, setImdbIsTrue] = useState(true);

  useEffect(() => {
    if (imdb === 0) {
      setImdbIsTrue(false);
    }
  }, [imdb]);

  return (
    <div className="one-movie-container">
      {adult && <Adult />}
          <img src={pic} alt={name} />

        <div className="body-imdb-container">
          <Star />
          <p className="body-imdb-text"> IMDB : </p>
          {imdbIsTrue ? (
            <p className="body-imdb"> {imdb} / 10</p>
          ) : (
            <p className="body-unknown"> Unknown </p>
          )}
        </div>


      <div className="body-context">
        <p className="body-name"> {name} </p>
        <p className="body-date"> {date} </p>
      </div>
    </div>
  );
}
