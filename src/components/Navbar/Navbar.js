import React from "react";
import "./Navbar.css";
import "@fontsource/epilogue";
import "@fontsource/archivo";
import "@fontsource/expletus-sans";

export default function () {
  return (
    <div className="navbar">
      <div className="logo-container">
        <p className="logo"> TopCine </p>
      </div>

      <div className="other-container">
        <p className="saved"> Saved </p>
        <p className="imdb"> Imdb </p>
        <p className="contact"> Contact me </p>

        <div className="check-container">
          <input type="checkbox" />
          <div className="check"></div>
        </div>
      </div>
    </div>
  );
}
