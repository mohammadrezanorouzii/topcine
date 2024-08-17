import React, { useState, useEffect } from "react";
import BodyCards from "../BodyCards/BodyCards";
import styles from "./Body.module.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Body({ topMovies, nowMovies, upMovies }) {
  const [categoryNumber, setCategory] = useState(1);
  const [showMovies1, setShowMovies1] = useState(topMovies);
  const [showMovies2, setShowMovies2] = useState(topMovies);
  const [showMovies3, setShowMovies3] = useState(topMovies);
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [n, setn] = useState(1);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setShowMovies1(response.results);
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setShowMovies2(response.results);
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setShowMovies3(response.results);
      })
      .catch((err) => console.error(err));
  }, [n, categoryNumber]);

  const clickedTop = () => {
    setCategory(1);
    setShowMovies1(topMovies);
  };
  const clickedNow = () => {
    setCategory(2);
    setShowMovies2(nowMovies);
  };
  const clickedUp = () => {
    setCategory(3);
    setShowMovies3(upMovies);
  };

  return (
    <>
      <div className="" onScroll={clickedTop}>
        <div
          className={
            categoryNumber === 1
              ? styles["top-container"]
              : styles["top-container-low-opacity"]
          }
          onClick={clickedTop}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> TOP RATED </p>
        </div>
        <div
          className={
            categoryNumber === 2
              ? styles["now-container"]
              : styles["now-container-low-opacity"]
          }
          onClick={clickedNow}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> NOW PLAYING </p>
        </div>
        <div
          className={
            categoryNumber === 3
              ? styles["up-container"]
              : styles["up-container-low-opacity"]
          }
          onClick={clickedUp}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> POPULAR </p>
        </div>
      </div>

      {categoryNumber === 1 && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {showMovies1.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {showMovies1.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div>
        </div>
      )}

      {categoryNumber === 2 && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {showMovies2.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  id={obj.id}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {showMovies2.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div>
        </div>
      )}

      {categoryNumber === 3 && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {showMovies3.slice(0, 10).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {showMovies3.slice(10, 20).map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                  id={obj.id}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div> */}

      <div className={styles["all-btns"]}>
        <GrFormPrevious
          className={styles["pre-btn"]}
          onClick={() => {
            if (n > 1) {
              setn(n - 1);
            }
          }}
        />
        {btns.map((e) => {
          return (
            <button
              className={e === n ? styles["selected"] : styles.not}
              onClick={() => {
                setn(e);
              }}
            >
              {e}
            </button>
          );
        })}
        <GrFormNext
          className={styles["next-btn"]}
          onClick={() => {
            if (n < 10) {
              setn(n + 1);
            }
          }}
        />
      </div>
    </>
  );
}
