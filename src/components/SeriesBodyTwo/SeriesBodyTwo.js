import React from "react";
import SeriesCardsTwo from "../SeriesCardsTwo/SeriesCardsTwo";
import styles from "./SeriesBodyTwo.module.scss";

export default function SeriesBodyTwo({ series2 }) {

  return (
    <>
    <div className={styles.total2}>
      <div className={styles.seriesslider2}>
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
