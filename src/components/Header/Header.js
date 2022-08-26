import React, { useState } from "react";
import img1 from "../pics/st4.jfif";
import img2 from "../pics/st3.jfif";
import img3 from "../pics/DV.jfif";
import img4 from "../pics/Man.jfif";
import img5 from "../pics/djanog.jfif";
import "./Header.css";

export default function Header() {

  let array = [img1, img2, img3, img4, img5]

  const [showingPic, setShowingPic] = useState(img1)
  const [num, setNum] = useState(0)

  setTimeout(()=> {
    setShowingPic(array[num])
    if (num < 4) {
      setNum(num + 1)
    }
    else {
      setNum(0)
    }
  },3000)

  return (
    <div className="total">
      <img src={showingPic} alt="" className="header-img" />
      <div className="header-context">
        <p>
          Start Exploring thousands of films for free 
        </p>
        <button> GET STARTED </button>
      </div>
    </div>
  );
}
