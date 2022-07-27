import React, { useState, useEffect } from "react";
import Star from "../Icons/Star";
import Adult from "../Icons/Adult";
import "@fontsource/epilogue";
import "./BodyCards.css";

export default function BodyCards({ name, pic, imdb, date, adult, genre, popularity }) {
  const [imdbIsTrue, setImdbIsTrue] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [genres, setGenres] = useState([]);

  const falseHovering = () => {
    setHovering(false);
  };

  const trueHovering = () => {
    setHovering(true);
  };

  const options = {
    method: "GET",
  };

  // console.log(genreName);

  const genreName = genres
    .filter((item) => genre.includes(item.id))
    .slice(0, 5);

  useEffect(() => {
    if (imdb === 0) {
      setImdbIsTrue(false);
    }

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7a47242793d59eb1570389827de8affd&language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      className="one-movie-container"
      onMouseOver={trueHovering}
      // onMouseLeave={falseHovering}
    >
      {adult && <Adult />}

      <div className="img-container">
        {hovering && (
          <div className="container-container">
            <div className="popularity-container">
              <p className="popularity-text"> Popularity : </p>
              <p className="popularity"> {popularity} </p>
            </div>
            <div className="body-imdb-container">
              <Star className="star" />
              <p className="body-imdb-text"> IMDB : </p>
              {imdbIsTrue ? (
                <p className="body-imdb"> {imdb} / 10</p>
              ) : (
                <p className="body-imdb"> Unknown </p>
              )}
            </div>
          </div>
        )}
        <img src={pic} alt={name} />
      </div>

      <div className="body-context">
        <p className="body-name"> {name} </p>
        <p className="body-date"> {date} </p>
        <div className="genre-container">
          {genreName.map((e) => (
            <p className="genre"> {e.name} </p>
          ))}
        </div>
      </div>
    </div>
  );
}
