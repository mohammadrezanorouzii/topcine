import React, { useState } from "react";
import MovieCards from "./../MovieCards/MovieCards";
import styles from "./Slider.module.scss";
import PervBtn from "../Icons/PervBtn";
import NextBtn from "../Icons/NextBtn";

export default function Slider({items}) {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < 7) {
      setPage(page + 1);
    }
    if (page === 6) {
      setPage(0);
    }
  };

  const perv = () => {
    if (page > -1) {
      setPage(page - 1);
    }
    if (page === 0) {
      setPage(6);
    }
  };

  return (
    <>
      <div className={styles["trending-container"]}>
        <div className={styles.line}></div>
        <p className={styles.trending}> TRENDING MOVIES </p>
      </div>

      <div className={styles["all-container"]}>
        <div className={styles.perv}>
          <div className={styles.pervv} onClick={perv}>
            {" "}
            <PervBtn />{" "}
          </div>
        </div>

        <div className={styles["container-slider"]}>
          <div className={styles.slider} style={{ left: `-${page * 96}%` }}>
            {items.map((obj) => {
              return (
                <MovieCards
                  name={obj.title}
                  pic={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.next}>
          <div className={styles.nextt} onClick={next}>
            {" "}
            <NextBtn />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
