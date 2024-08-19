import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../pics/c.jpeg";
import img3 from "../../pics/st4.jfif";
import img4 from "../../pics/Man.jfif";
import img5 from "../../pics/djanog.jfif";
import img7 from "../../pics/DV.jfif";
import img8 from "../../pics/e.png";
import img9 from "../../pics/a.jpg";

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
    <div>
      <img src={showingPic} alt="" className="rounded-none h-screen w-full" />
      <div className="absolute text-text right-20 bottom-[50px] text-3xl w-[350px] xl:block md:hidden sm:hidden lg:block">
        <p>Explore thousands of movies and series for free</p>
        <Link to="/signup">
          <button className="btn mt-3 text-xl btn-primary bg-stone-600  text-text border-none hover:bg-primary">
            Start Here
          </button>
        </Link>
      </div>
    </div>
  );
}
