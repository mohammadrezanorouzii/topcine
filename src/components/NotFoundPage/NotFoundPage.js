import React from 'react'
import styles from "./NotFoundPage.module.scss"
import img1 from "../../pics/404.jpg"
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={styles.notfoundtotal} style={{ backgroundImage: `url(${img1})` }}>
      <div className={styles.notfoundcontext}>
        <p className={styles.text404}> 404 ERROR </p>
        <div className={styles.notfoundline}></div>
        <div className={styles.pagenotfoundcontainer}>
          <p className={styles.pagenotfound}> Page not found </p>
          <Link to="/" className={styles.getoutbtnlink} > GO HOME ! </Link>
        </div>
      </div>
    </div>
  )
}
