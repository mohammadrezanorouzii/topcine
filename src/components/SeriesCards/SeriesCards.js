import React from 'react'
import styles from "./SeriesCards.module.scss"

export default function SeriesCards({pic}) {
  return (
    <div className=''>
      <img src={pic} alt="" className={styles.seriesimg} />
    </div>
  )
}
