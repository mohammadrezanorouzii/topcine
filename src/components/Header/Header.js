import React, { useState } from "react";
import img1 from "../../pics/st4.jfif";
import img2 from "../../pics/BP.jpg";
import img3 from "../../pics/GF1.jpg";
import img4 from "../../pics/Man.jfif";
import img5 from "../../pics/djanog.jfif";
import img6 from "../../pics/it.png";
import img7 from "../../pics/DV.jfif";
import img8 from "../../pics/walle.jpg";
import img9 from "../../pics/BB4.jpg";
import styles from "./Header.module.scss";

export default function Header() {
  let array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [showingPic, setShowingPic] = useState(img1);
  const [num, setNum] = useState(0);

  setTimeout(() => {
    setShowingPic(array[num]);
    if (num < 8) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }, 3000);

  return (
    <div className={styles.total}>
      <img src={showingPic} alt="" className={styles.headerimg} />
      <div className={styles.headercontext}>
        <p>Start Exploring thousands of films for free</p>
        <button> GET STARTED </button>
      </div>
    </div>
  );
}
