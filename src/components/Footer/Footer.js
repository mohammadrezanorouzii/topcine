import React from "react";
import styles from "./Footer.module.scss";
import Twitter from "../../Icons/Twitter";
import Linkedin from "../../Icons/Linkedin";
import Github from "../../Icons/Github";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={styles["total"]}>
        <div className={styles["icons-container"]}>
          <div className={styles["twitter"]}>
            <Link to="https://x.com/mamarezza__">
              <Twitter />
            </Link>
          </div>
          <div className={styles["linkedin"]}>
            <Link to="https://www.linkedin.com/in/mohammadreza6/">
              <Linkedin />
            </Link>
          </div>
          <div className={styles["github"]}>
            <Link to="https://github.com/mohammadrezanorouzii/">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
