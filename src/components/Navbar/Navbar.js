import React, { useEffect, useState } from "react";
import "./Navbar.css";
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
    <div className={`${navbarOpacityIsZero ? "light-navbar" : "dark-navbar"}`}>
      <div className="navbar-items">
        <div className="logo-container">
          <p className="logo"> TopCine </p>
        </div>

        <div className="other-container">
          <Link className="saved" to='/saved'> Saved </Link>
          <Link className="go-to-login" to='/login'> Log in </Link>
          <Link className="go-to-signup" to='/signup'> Sign up </Link>

          <div className="check-container">
            <input type="checkbox" />
            <div className="check"></div>
          </div>
        </div>
      </div>

      {!navbarOpacityIsZero &&  <div className="scroll-indicator-container">
        <div className="dark-scroll" style={{width:`${scrollY/55}%`}}></div>
      </div>}

    </div>
  );
}
