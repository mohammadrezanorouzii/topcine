import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import "@fontsource/epilogue";
import "@fontsource/archivo";
import "@fontsource/expletus-sans";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpacityIsZero, setNavbarOpacityIsZero] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  // const [focus, setFocus] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [openBurger, setBurger] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

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
      {/* <label className="btn btn-circle swap swap-rotate"  onClick={() => {
          setBurger(!openBurger);
        }}> 
        <input type="checkbox" />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label> */}

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
