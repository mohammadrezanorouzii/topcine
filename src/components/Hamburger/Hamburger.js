import { useEffect } from "react";
import styles from "./Hamburger.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hamburger() {

  return (
    <>
       (
        <div className={styles["container"]}>
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
      )
    </>
  );
}
