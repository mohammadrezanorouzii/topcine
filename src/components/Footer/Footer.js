import React from "react";
import styles from "./Footer.module.scss";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import Github from "../Icons/Github";

export default function Footer() {
  return (
    <>
      <div className={styles["total"]}> 
        <div className={styles["icons-container"]}>
          <div className={styles["twitter"]}>
            <Twitter />
          </div>
          <div className={styles["instagram"]}>
            <Instagram />
          </div>
          <div className={styles["linkedin"]}>
            <Linkedin />
          </div>
          <div className={styles["github"]}>
            <Github />
          </div>
        </div>
      </div>
    </>
  );
}
