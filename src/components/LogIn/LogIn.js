import React, { useState } from "react";
import "./LogIn.css";
import img1 from "../pics/it.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [emailBorder, setEmailBorder] = useState(false);
  const [passBorder, setPassBorder] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [error, setError] = useState(false);

  // if one or both of email and pass was incorrect --> opacity of button = 0.7 and alert error
  // if one or both of email and pass was empty --> opacity of button = 0.7

  const checkValidation = () => {
    if (email === "m123" && password === "123") {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="login-total" style={{ backgroundImage: `url(${img1})` }}>
        <div className="login-shadow">
          <div className="login-context">
            <div className="login-logo-container">
              <p className="login-logo"> TopCine </p>
            </div>
            <div className="text-container">
              <p> Log In </p>
              <div className="login-circle"></div>
            </div>
            <div className="new-user-container">
              <p className="new-user-text"> Dont have an account ? </p>
              <Link className="new-user" to="/signup"> Sign Up </Link>
            </div>
            <form className="inputs" onSubmit={checkValidation}>
              <div
                className={`${
                  emailBorder ? "email-container-border" : "email-container"
                }`}
              >
                <p className={`${emailBorder ? "email-colored" : "email"}`}>
                  {" "}
                  Email :
                </p>
                <input
                  className="input-email"
                  type="text"
                  required
                  onFocus={() => {
                    setEmailBorder(true);
                  }}
                  onBlur={() => {
                    setEmailBorder(false);
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div
                className={`${
                  passBorder ? "pass-container-border" : "pass-container"
                }`}
              >
                <p className={`${passBorder ? "pass-colored" : "pass"}`}>
                  {" "}
                  Password :
                </p>
                <input
                  className="input-pass"
                  type="password"
                  required
                  onFocus={() => {
                    setPassBorder(true);
                  }}
                  onBlur={() => {
                    setPassBorder(false);
                  }}
                  value={password}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                />
              </div>
              <div>
                {error && (
                  <p className="login-error">
                    {" "}
                    your username or password is incorrect, Try Again{" "}
                  </p>
                )}
              </div>
              <div className="remememberme-container">
                <input type="checkbox" className="rememberme" />
                <p className="rememberme-text"> Remember Me </p>
              </div>
              <div className="login-btn-container">
                <input type="submit" className="login-btn" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
