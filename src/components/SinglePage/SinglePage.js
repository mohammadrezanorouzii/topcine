import React, { useEffect, useState } from "react";
import styles from "./SinglePage.module.scss";
import Star from "../Icons/Star";
import imdbLogo from "../pics/imdb-logo.png";
import One from "../Icons/One"
import Two from "../Icons/Two"
import Three from "../Icons/Three"
import SelectedOne from "../Icons/SelectedOne"
import SelectedTwo from "../Icons/SelectedTwo"
import SelectedThree from "../Icons/SelectedThree"

export default function SinglePage() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [moviePics, setMoviePics] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movie_id, setmovie_id] = useState(238);
  const [castsPart1, setCastsPart1] = useState(true);
  const [castsPart2, setCastsPart2] = useState(false);
  const [castsPart3, setCastsPart3] = useState(false);

  const true1 = () => {
    setCastsPart1(true)
    setCastsPart2(false)
    setCastsPart3(false)
  }
  const true2 = () => {
    setCastsPart1(false)
    setCastsPart2(true)
    setCastsPart3(false)
  }
  const true3 = () => {
    setCastsPart1(false)
    setCastsPart2(false)
    setCastsPart3(true)
  }

  const options = {
    method: "GET",
  };

  // Details

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieInfo(response);
      })
      .catch((err) => console.error(err));
  }, []);

  // Reviews  with images --> should be fixed

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieReviews(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  // Credits - cast

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieCredits(response.cast);
      })
      .catch((err) => console.error(err));
  }, []);

  var credits = movieCredits.slice(0,5);
  var credits2 = movieCredits.slice(5,10);
  var credits3 = movieCredits.slice(10,15);
  console.log(credits);

  return (
    // <div className={styles.total}>
    //   <p> {movieInfo.title} </p>
    //   <img
    //     src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
    //     alt={movieInfo.name}
    //   />
    //   {movieReviews.map((e) => {
    //     return <p> {e.author_details.username} </p>;
    //   })}
    //   {movieCredits.map((e) => {
    //     return <p> {e.character} </p>;
    //   })}
    // </div>
    <>
      <div className={styles["header"]}>
        <div className={styles.line}></div>
        <div className={styles["img-container"]}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.name}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}> {movieInfo.title} </p>
          <div className={styles["down-info"]}>
            <p className={styles.date}> {movieInfo.release_date} </p>
            <img src={imdbLogo} alt="imdb" />
            <p className={styles.imdb}>
              {" "}
              {Math.round(movieInfo.vote_average * 10) / 10}
            </p>
            <p className={styles.count}> ({movieInfo.vote_count}) </p>
          </div>
          <div>
            <p className={styles.overview}>{movieInfo.overview}</p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles["total-casts"]}>
          <div className={styles["genre-container"]}>
            <div className={styles["genre-line"]}></div>
            <p> CASTS </p>
          </div>
          <div className={styles.cast}>
            {castsPart1 && credits.map((e) => {
              return (
                <div className={styles["one-cast"]}>
                  <img src={`https://image.tmdb.org/t/p/original/${e.profile_path}`} alt="not found"/ > 
                  <p className={styles["name-text"]}> Name : </p>
                  <p className={styles["cast-name"]}> {e.name} </p>
                  <p className={styles["char-text"]}> Character : </p>
                  <p className={styles["cast-char"]}> {e.character} </p>
                </div>
              );
            })}
            {castsPart2 && credits2.map((e) => {
              return (
                <div className={styles["one-cast"]}>
                  <img src={`https://image.tmdb.org/t/p/original/${e.profile_path}`} alt="not found"/ > 
                  <p className={styles["name-text"]}> Name : </p>
                  <p className={styles["cast-name"]}> {e.name} </p>
                  <p className={styles["char-text"]}> Character : </p>
                  <p className={styles["cast-char"]}> {e.character} </p>
                </div>
              );
            })}
            {castsPart3 && credits3.map((e) => {
              return (
                <div className={styles["one-cast"]}>
                  <img src={`https://image.tmdb.org/t/p/original/${e.profile_path}`} alt="not found"/ > 
                  <p className={styles["name-text"]}> Name : </p>
                  <p className={styles["cast-name"]}> {e.name} </p>
                  <p className={styles["char-text"]}> Character : </p>
                  <p className={styles["cast-char"]}> {e.character} </p>
                </div>
              );
            })}
          </div>
          <div className={styles["three-buttons"]}>
            { castsPart1 ? <SelectedOne /> : <One onClick={true1}/> }
            { castsPart2 ? <SelectedTwo className={styles.two} /> : <Two onClick={true2} className={styles.two}/> }
            { castsPart3 ? <SelectedThree /> : <Three onClick={true3}/> }
          </div>
        </div>
        <div className={styles["genre-container"]}>
          <div className={styles["genre-line"]}></div>
          <p> GENRES </p>
        </div>
      </div>
    </>
  );
}
