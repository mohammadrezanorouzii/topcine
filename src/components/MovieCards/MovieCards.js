import React, { useState } from "react";
import "./MovieCards.css";
import "@fontsource/epilogue";
import Star from "../Icons/Star";

export default function MovieCards({ name, pic, imdb, date }) {
  const [hovering, setHovering] = useState(false);
  const [longName, setLongName] = useState(false);

  const changeHovering = () => {
    setHovering(true);
  };

  const falseHovering = () => {
    setHovering(false);
  };

  const longNameCheck = () => {
    if (name.length > 30) {
      setLongName(true);
    }
  };

  return (
    <div
      className="card"
      onMouseOver={() => {
        longNameCheck();
        changeHovering();
      }}
      onMouseLeave={falseHovering}
    >
      <div className="pic">
        <img className="pic" src={pic} alt={name} />
        {hovering ? (
          !longName ? (
            <div className="context">
              <p className="name"> {name} </p>
              <div className="about">
                <p className="date"> {date} </p>
                <Star />
                <div className="imdb-container">
                  <p className="imdb-name"> IMDB : </p>
                  <p className="imdb-rating"> {imdb} / 10</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="long-context">
              <p className="name"> {name} </p>
              <div className="about">
                <p className="date"> {date} </p>
                <Star />
                <div className="imdb-container">
                  <p className="imdb-name"> IMDB : </p>
                  <p className="imdb-rating"> {imdb} / 10</p>
                </div>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
