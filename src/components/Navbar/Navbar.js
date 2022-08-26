import React, { useEffect, useState } from "react";
import styles from './Navbar.module.scss'
import "@fontsource/epilogue";
import "@fontsource/archivo";
import "@fontsource/expletus-sans";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpacityIsZero, setNavbarOpacityIsZero] = useState(true);
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 200) {
        setNavbarOpacityIsZero(false);
      } else {
        setNavbarOpacityIsZero(true);
      }
      setScrollY(window.scrollY)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${navbarOpacityIsZero ? styles.lightnavbar : styles.darknavbar }`}>
      <div className={styles.navbaritems}>
        <div className={styles.logocontainer}>
          <p className={styles.logo}> TopCine </p>
        </div>

        <div className={styles.othercontainer}>
          <Link className={styles.saved} to='/saved'> Saved </Link>
          <Link className={styles.gotologin} to='/login'> Log in </Link>
          <Link className={styles.gotosignup} to='/signup'> Sign up </Link>

          <div className={styles.checkcontainer}>
            <input type="checkbox" />
            <div className={styles.check}></div>
          </div>
        </div>
      </div>

      {!navbarOpacityIsZero &&  <div className={styles.scrollindicatorcontainer}>
        <div className={styles.darkscroll} style={{width:`${scrollY/55}%`}}></div>
      </div>}

    </div>
  );
}
