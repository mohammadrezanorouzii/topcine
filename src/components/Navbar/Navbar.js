import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import "@fontsource/epilogue";
import "@fontsource/archivo";
import "@fontsource/expletus-sans";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar() {
  const [navbarOpacityIsZero, setNavbarOpacityIsZero] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  // const [focus, setFocus] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [openBurger, setBurger] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(window.scrollY);
      // console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 200) {
        setNavbarOpacityIsZero(false);
      } else {
        setNavbarOpacityIsZero(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpacityIsZero]);

  return (
    <>
      <div
        className={styles["burger"]}
        onClick={() => {
          setBurger(!openBurger);
        }}
      >
        <GiHamburgerMenu className={styles["burger-icon"]} />
      </div>
      {openBurger && <Hamburger />}

      <div
        className={`${
          navbarOpacityIsZero ? styles.lightnavbar : styles.darknavbar
        }`}
      >
        <div className={styles.navbaritems}>
          <div className={styles.logocontainer}>
            <p className={styles.logo}> TopCine </p>
          </div>

          {/* {!navbarOpacityIsZero && (
            <div
              className={
                focus
                  ? styles["search-container-long"]
                  : styles["search-container"]
              }
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => {
                setFocus(false);
              }}
            >
              <div className={styles["search"]}>
                <Search searchValue={searchValue} />
              </div>
              <input
                type="text"
                placeholder="Search here"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </div>
          )} */}

          <div className={styles.othercontainer}>
            <Link className={styles.saved} to="/saved">
              Saved
            </Link>
            <Link className={styles.gotologin} to="/login">
              Log in
            </Link>
            <Link className={styles.gotosignup} to="/signup">
              Sign up
            </Link>
          </div>
        </div>

        {!navbarOpacityIsZero && (
          <div className={styles.scrollindicatorcontainer}>
            <div
              className={styles.darkscroll}
              style={{ width: `${scrollY / 60}%` }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
