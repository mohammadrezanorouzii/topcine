import React, { useState } from "react";
import styles from "./MovieCards.module.scss";
import "@fontsource/epilogue";
import Star from "../../Icons/Star";

export default function MovieCards({ name, pic, imdb, date }) {
  const [hovering, setHovering] = useState(false);
  const [longName, setLongName] = useState(false);

  const changeHovering = () => {
    setHovering(true);
  };

  const falseHovering = () => {
    setHovering(false);
  };

  const longNameCheck = () => {
    if (name.length > 30) {
      setLongName(true);
    }
  };

  return (
    <div
      className="carousel carousel-center bg-neutral 
    rounded-box max-w-md space-x-4 p-4"
    >
      <div className="carousel-item">
        <img className="w-full m-0 " src={pic} alt={name} />
      </div>
      <div className="carousel-item">
        <img className="w-full m-0 " src={pic} alt={name} />
      </div>
    </div>
    // <div
    //   className={styles.card}
    //   onMouseOver={() => {
    //     longNameCheck();
    //     changeHovering();
    //   }}
    //   onMouseLeave={falseHovering}
    // >
    //   <div className={styles.pic}>
    //     <img className={styles.pic} src={pic} alt={name} />
    //     {hovering ? (
    //       !longName ? (
    //         <div className={styles.context}>
    //           <p className={styles.name}> {name} </p>
    //           <div className={styles.about}>
    //             <p className={styles.date}> {date} </p>
    //             <Star />
    //             <div className={styles.imdbcontainer}>
    //               <p className={styles.imdbname}> IMDB : </p>
    //               <p className={styles.imdbrating}> {imdb} / 10</p>
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className={styles.longcontext}>
    //           <p className={styles.name}> {name} </p>
    //           <div className={styles.about}>
    //             <p className={styles.date}> {date} </p>
    //             <Star />
    //             <div className={styles.imdbcontainer}>
    //               <p className={styles.imdbname}> IMDB : </p>
    //               <p className={styles.imdbrating}> {imdb} / 10</p>
    //             </div>
    //           </div>
    //         </div>
    //       )
    //     ) : null}
    //   </div>
    // </div>
  );
}
