import React, { useState } from "react";
import styles from "./LogIn.module.scss"
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
    <div className={styles.login}>
      <div className={styles.logintotal} style={{ backgroundImage: `url(${img1})` }}>
        <div className={styles.loginshadow}>
          <div className={styles.logincontext}>
            <div className={styles.loginlogocontainer}>
              <Link className={styles.loginlogo} to="/"> TopCine </Link>
            </div>
            <div className={styles.textcontainer}>
              <p> Log In </p>
              <div className={styles.logincircle}></div>
            </div>
            <div className={styles.newusercontainer}>
              <p className={styles.newusertext}> Dont have an account ? </p>
              <Link className={styles.newuser} to="/signup"> Sign Up </Link>
            </div>
            <form className={styles.inputs} onSubmit={checkValidation}>
              <div
                className={`${
                  emailBorder ? styles.emailcontainerborder : styles.emailcontainer
                }`}
              >
                <p className={`${emailBorder ? styles.emailcolored : styles.email}`}>
                  Email :
                </p>
                <input
                  className={styles.inputemail}
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
                  passBorder ? styles.passcontainerborder : styles.passcontainer
                }`}
              >
                <p className={`${passBorder ? styles.passcolored : styles.pass}`}>
                  Password :
                </p>
                <input
                  className={styles.inputpass}
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
                  <p className={styles.loginerror}>
                    your username or password is incorrect, Try Again{" "}
                  </p>
                )}
              </div>
              <div className={styles.rememembermecontainer}>
                <input type="checkbox" />
                <p className={styles["rememberme-text"]}> Remember Me </p>
              </div>
              <div className={styles.loginbtncontainer}>
                <input type="submit" className={styles.loginbtn} value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
