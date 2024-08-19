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
  // const [openBurger, setBurger] = useState(false);
  // const [showBurger, setShowBurger] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(window.scrollY);
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
      {
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div
            className={`${
              navbarOpacityIsZero
                ? "navbar w-full animate-backgroundLightOpacity rounded-b-md fixed p-1"
                : "navbar w-full animate-backgroundDarkOpacity rounded-b-md z-10 fixed p-1"
            }`}
          >
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <p className={styles.logo}> TopCine </p>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link
                    className="text-[#ffffff] font-bebas font-light text-[20px] hover:text-secondaryy hover:border-none"
                    to="/saved"
                  >
                    Saved
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#ffffff] font-bebas font-light text-[20px] hover:text-primaryy "
                    to="/login"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#ffffff] font-bebas font-light text-[20px] hover:text-primaryy"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
            {!navbarOpacityIsZero && (
              <div className="absolute bottom-0 h-[4px] left-0 w-screen">
                <div
                  className="w-full h-full bg-scroll-gradient"
                  style={{ width: `${scrollY / 60}%` }}
                ></div>
              </div>
            )}
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              <li>
                <Link
                  className="text-text font-bebas font-light text-[30px] hover:text-secondaryy mx-auto"
                  to="/saved"
                >
                  Saved
                </Link>
              </li>
              <li>
                <Link
                  className="text-text font-bebas font-light text-[30px] hover:text-primaryy mx-auto"
                  to="/login"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  className="text-text font-bebas font-light text-[30px] hover:text-primaryy mx-auto"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}
