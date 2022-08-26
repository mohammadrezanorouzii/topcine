import React, { useState } from "react";
import SeriesCardsTwo from "../SeriesCardsTwo/SeriesCardsTwo";
import styles from "./SeriesBodyTwo.module.scss";

export default function SeriesBodyTwo({ series2 }) {
  const [n, setN] = useState(-1000);

  setTimeout(() => {
    if (n === -1000) {
      setN(0)
    }
    setN(n + 1);
  }, 50);

  return (
    <>
    <div className={styles.total2}>
      <div className={styles.seriesslider2} style={{ left: `${n*0.1}%` }}>
        {series2.map((x) => {
          return (
            <SeriesCardsTwo
              pic={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
