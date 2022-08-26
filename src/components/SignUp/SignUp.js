import React, { useState } from "react";
import "./SignUp.css";
import img1 from "../pics/it.jpg";
import CheckPassword from "./CheckPassword/CheckPassword";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  // const [emailFous, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  return (
    <div className="signup">
      <div className="signup-total" style={{ backgroundImage: `url(${img1})` }}>
        <div className="signup-shadow">
          <div className="checkpass-container">
            {passFocus && <CheckPassword password={password} />}
          </div>
          <div className="signup-context">
            <form className="signup-form">
              <div className="create-text-container">
                <p className="create-text"> Craete new account </p>
                <div className="signup-circle"></div>
              </div>
              <div className="already-container">
                <p className="already"> Already a memeber ? </p>
                <Link className="already-login" to="/login"> Log In </Link>
              </div>
              <div className="fl-names">
                <div className="fname-container">
                  <p className="fname-text"> First name </p>
                  <input
                    className="fname"
                    value={fname}
                    required
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div className="lname-container">
                  <p className="lname-text"> Last name </p>
                  <input
                    className="lname"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="signup-email-container">
                <p className="signup-email-text"> Email Adrress</p>
                <input
                  className="signup-email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="signup-pass-container">
                <p className="signup-pass-text"> Password </p>
                <input
                  className="signup-pass"
                  type="password"
                  value={password}
                  required
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                  onFocus={() => {
                    setPassFocus(true);
                  }}
                  onBlur={() => {
                    setPassFocus(false);
                  }}
                />
              </div>
              <div className="line4">
                <p className="line4-text">
                  don't have any idea for your password ?
                </p>
                <a
                  className="clickhere"
                  href="https://github.com/mohammadrezanorouzii/react-password-generator"
                >
                  Click Here
                </a>
              </div>
              <div className="signup-verify-pass-container">
                <p className="signup-pass-text"> Confirm Password </p>
                <input
                  className="signup-pass"
                  type="password"
                  value={verifyPassword}
                  onChange={(e) => {
                    setVerifyPassword(e.target.value);
                  }}
                />
              </div>
              <div className="sex-submit-container">
                <div className="sex-container">
                  <p className="sex-text"> Sex </p>
                  <select id="sex" className="sex">
                    <option value="volvo"> Male </option>
                    <option value="saab"> Female </option>
                    <option value="opel"> Other </option>
                  </select>
                </div>
                <div className="btn-container">
                  <input type="submit" className="signup-btn" value="Sign Up" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
