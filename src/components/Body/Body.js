import React, { useState, useEffect } from "react";
import BodyCards from "../BodyCards/BodyCards";
import styles from "./Body.module.scss";

export default function Body({ topMovies, nowMovies, upMovies }) {
  const [topIsSelected, setTopIsSelected] = useState(true);
  const [nowIsSelected, setNowIsSelected] = useState(false);
  const [upIsSelected, setUpIsSelected] = useState(false);
  const [showMovies1, setShowMovies1] = useState(topMovies);
  const [showMovies2, setShowMovies2] = useState(topMovies);
  const [showMovies3, setShowMovies3] = useState(topMovies);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const [selected9, setSelected9] = useState(false);
  const [selected10, setSelected10] = useState(false);
  const [n, setn] = useState(1);

  const check = (x) => {
    setn(x);
    if (x === 1) {
      setSelected1(true);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 2) {
      setSelected1(false);
      setSelected2(true);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 3) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(true);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 4) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(true);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 5) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(true);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 6) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(true);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 7) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(true);
      setSelected8(false);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 8) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(true);
      setSelected9(false);
      setSelected10(false);
    }
    if (x === 9) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(true);
      setSelected10(false);
    }
    if (x === 10) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      setSelected5(false);
      setSelected6(false);
      setSelected7(false);
      setSelected8(false);
      setSelected9(false);
      setSelected10(true);
    }
  };

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
  }, [n]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setShowMovies2(response.results);
      })
      .catch((err) => console.error(err));
  }, [n]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=${n}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setShowMovies3(response.results);
      })
      .catch((err) => console.error(err));
  }, [n]);

  console.log(showMovies1);

  // button on click setn(3) and a function should setShowMovies(loadedMovies)

  const clickedTop = () => {
    setTopIsSelected(true);
    setNowIsSelected(false);
    setUpIsSelected(false);
    setShowMovies1(topMovies);
  };
  const clickedNow = () => {
    setNowIsSelected(true);
    setTopIsSelected(false);
    setUpIsSelected(false);
    setShowMovies2(nowMovies);
  };
  const clickedUp = () => {
    setUpIsSelected(true);
    setTopIsSelected(false);
    setNowIsSelected(false);
    setShowMovies3(upMovies);
  };

  const movies1 = showMovies1.slice(0, 10);
  const movies2 = showMovies1.slice(10, 20);
  const movies3 = showMovies2.slice(0, 10);
  const movies4 = showMovies2.slice(10, 20);
  const movies5 = showMovies3.slice(0, 10);
  const movies6 = showMovies3.slice(10, 20);

  return (
    <>
      <div className={styles["choose-container"]} onScroll={clickedTop}>
        <div
          className={
            topIsSelected
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
            nowIsSelected
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
            upIsSelected
              ? styles["up-container"]
              : styles["up-container-low-opacity"]
          }
          onClick={clickedUp}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> POPULAR </p>
        </div>
      </div>

      {topIsSelected && (
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
      )}

      {nowIsSelected && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {movies3.map((obj) => {
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
            {movies4.map((obj) => {
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
      )}

      {upIsSelected && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {movies5.map((obj) => {
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
            {movies6.map((obj) => {
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
      )}

      <div className={styles["all-btns"]}>
        <button
          onClick={() => {
            check(1);
          }}
          className={selected1 ? styles["selected"] : styles.not}
        >
          {" "}
          1{" "}
        </button>
        <button
          onClick={() => {
            check(2);
          }}
          className={selected2 ? styles["selected"] : styles.not}
        >
          {" "}
          2{" "}
        </button>
        <button
          onClick={() => {
            check(3);
          }}
          className={selected3 ? styles["selected"] : styles.not}
        >
          {" "}
          3{" "}
        </button>
        <button
          onClick={() => {
            check(4);
          }}
          className={selected4 ? styles["selected"] : styles.not}
        >
          {" "}
          4{" "}
        </button>
        <button
          onClick={() => {
            check(5);
          }}
          className={selected5 ? styles["selected"] : styles.not}
        >
          {" "}
          5{" "}
        </button>
        <button
          onClick={() => {
            check(6);
          }}
          className={selected6 ? styles["selected"] : styles.not}
        >
          {" "}
          6{" "}
        </button>
        <button
          onClick={() => {
            check(7);
          }}
          className={selected7 ? styles["selected"] : styles.not}
        >
          {" "}
          7{" "}
        </button>
        <button
          onClick={() => {
            check(8);
          }}
          className={selected8 ? styles["selected"] : styles.not}
        >
          {" "}
          8{" "}
        </button>
        <button
          onClick={() => {
            check(9);
          }}
          className={selected9 ? styles["selected"] : styles.not}
        >
          {" "}
          9{" "}
        </button>
        <button
          onClick={() => {
            check(10);
          }}
          className={selected10 ? styles["selected"] : styles.not}
        >
          {" "}
          10{" "}
        </button>
      </div>
    </>
  );
}
