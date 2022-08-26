import React, { useState } from "react";
import SeriesCards from "../SeriesCards/SeriesCards";
import styles from "./SeriesBody.module.scss";

export default function SeriesBody({ series }) {
  const [n, setN] = useState(0);

  setTimeout(() => {
    setN(n + 1);
  }, 50);

  return (
    <>
    <div className={styles.total}>
      <div className={styles.seriesslider} style={{ left: `-${n*0.2}%` }}>
        {series.map((x) => {
          return (
            <SeriesCards
              pic={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
