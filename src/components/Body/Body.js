import React, { useState, useEffect } from "react";
import BodyCards from "../BodyCards/BodyCards";
import styles from "./Body.module.scss";

export default function Body({ topMovies, nowMovies, upMovies }) {
  
  const [topIsSelected, setTopIsSelected] = useState(true)
  const [nowIsSelected, setNowIsSelected] = useState(false)
  const [upIsSelected, setUpIsSelected] = useState(false)
  const [showMovies, setShowMovies] = useState(topMovies)

  useEffect(() => {

    function incrementNum() {
      setTopIsSelected(true)
      setNowIsSelected(false)
      setUpIsSelected(false)
      setShowMovies(topMovies)
    }
    incrementNum();
  }, [topMovies]);

  const clickedTop = () => {
    setTopIsSelected(true)
    setNowIsSelected(false)
    setUpIsSelected(false)
    setShowMovies(topMovies)
  }
  const clickedNow= () => {
    setNowIsSelected(true)
    setTopIsSelected(false)
    setUpIsSelected(false)
    setShowMovies(nowMovies)
  }
  const clickedUp = () => {
    setUpIsSelected(true)
    setTopIsSelected(false)
    setNowIsSelected(false)
    setShowMovies(upMovies)
  }
  
  const movies1 = showMovies.slice(0, 10);
  const movies2 = showMovies.slice(10, 20);

  return (
    <>
    <div className={styles["choose-container"]} onScroll={clickedTop}>
      <div className={ topIsSelected ? styles["top-container"] : styles["top-container-low-opacity"]} onClick={clickedTop}>
        <div className={styles.line}></div>
        <p className={styles.top}> TOP RATED </p>
      </div>
      <div className={ nowIsSelected ? styles["now-container"] : styles["now-container-low-opacity"]} onClick={clickedNow}>
        <div className={styles.line}></div>
        <p className={styles.top}> NOW PLAYING </p>
      </div>
      <div className={ upIsSelected ? styles["up-container"] : styles["up-container-low-opacity"]} onClick={clickedUp}>
        <div className={styles.line}></div>
        <p className={styles.top}> POPULAR </p>
      </div>
    </div>

      <div className={styles.allbody}>
        <div className={styles.firstbody}>
          {movies1.map((obj) => {
            return (
              <BodyCards
                popularity={obj.popularity}
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
        <div className={styles.secondbody}>
          {movies2.map((obj) => {
            return (
              <BodyCards
                popularity={obj.popularity}
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
    </>
  );
}
