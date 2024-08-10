import React, { useState, useEffect } from "react";
import Star from "../../Icons/Star";
import Adult from "../../Icons/Adult";
import "@fontsource/epilogue";
import styles from "./BodyCards.module.scss";
import {Link} from 'react-router-dom'

export default function BodyCards({ name, pic, imdb, date, adult, genre, popularity, id }) {
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

  const genreName = genres.filter((item) => genre.includes(item.id)).slice(0, 5);

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
      className={styles.onemoviecontainer}
      onMouseOver={trueHovering}
      onMouseLeave={falseHovering}
    >
      {adult && <Adult />}

      <div className={styles.imgcontainer}>
        {hovering && (
          <div className={styles.containercontainer}>
            <div className={styles.popularitycontainer}>
              <p className={styles.popularitytext}> Popularity : </p>
              <p className={styles.popularity}> {popularity} </p>
            </div>
            <div className={styles.bodyimdbcontainer}>
              <Star className={styles.star} />
              <p className={styles.bodyimdbtext}> IMDB : </p>
              {imdbIsTrue ? (
                <p className={styles.bodyimdb}> {imdb} / 10</p>
              ) : (
                <p className={styles.bodyimdb}> Unknown </p>
              )}
            </div>
          </div>
        )}
        <img src={pic} alt={name} />
      </div>

      <div className={styles.bodycontext}>
        <p className={styles.bodyname}> {name} </p>
        {/* <p> {id} </p> */}
        <p className={styles.bodydate}> {date} </p>
        <div className={styles.genrecontainer}>
          {genreName.map((e) => (
            <p className={styles.genre}> {e.name} </p>
          ))}
          <Link to={`/singlepage/${id}`}> see more </Link>
        </div>
      </div>
    </div>
  );
}
