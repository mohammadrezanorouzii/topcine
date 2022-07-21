import React from 'react'
import "./Navbar.css"
import "@fontsource/epilogue";
import "@fontsource/archivo";

export default function () {
  return (
    <div className="navbar">

      <div className="logo-container">
        <p className="logo"> TopCine </p>
      </div>

      <div className="other-container">
        <p className="saved"> SAVED </p>
        <p className="imdb"> IMDB </p>
        <p className="contact"> CONTACT ME </p>

        <div className="check-container">
          <input type="checkbox" />
          <div className="check"></div>
        </div>

      </div>
      
    </div>
  );
}
