import React, { useState } from "react";
import "./LogIn.css";
import img1 from "../pics/it.jpg";

export default function LogIn() {
  const [myBorder, setMyBorder] = useState("none");

  return (
    <div className="login">
      <div className="login-total" style={{ backgroundImage: `url(${img1})` }}>
        <div className="login-shadow">
          <div className="login-context">
            <div className="login-logo-container">
              <p className="login-logo"> TopCine </p>
            </div>
            <div className="text-container">
              <p className="text"> Log In </p>
            </div>
            <div className="inputs">
              <div
                className="email-container"
                onFocus={() => {
                  setMyBorder("#de518e 2px solid");
                }}
                style={{ border: `${myBorder};` }}
              >
                <p className="email"> Email :</p>
                <input
                  type="text"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div
                className="pass-container"
                onFocus={() => {
                  setMyBorder("#de518e 2px solid");
                }}
                style={{ border: `${myBorder};` }}
              >
                <p className="pass"> Password :</p>
                <input
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
