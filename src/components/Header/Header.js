import React, { useState } from "react";
import img1 from "../../pics/c.jpeg";
import img3 from "../../pics/st4.jfif";
import img4 from "../../pics/Man.jfif";
import img5 from "../../pics/djanog.jfif";
import img7 from "../../pics/DV.jfif";
import img8 from "../../pics/e.png";
import img9 from "../../pics/a.jpg";
import styles from "./Header.module.scss";

export default function Header() {
  let array = [img1, img3, img4, img5, img7, img8, img9];

  const [showingPic, setShowingPic] = useState(img1);
  const [num, setNum] = useState(0);

  setTimeout(() => {
    setShowingPic(array[num]);
    if (num < 6) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }, 3000);

  return (
    <div className={styles.total}>
      <img src={showingPic} alt="" className={styles.headerimg} />
      <div className={styles.headercontext}>
        <p>Explore thousands of movies and series for free</p>
        {/* <button> GET STARTED </button> */}
      </div>
    </div>
  );
}
