import React from 'react'
import styles from "./SeriesCardsTwo.module.scss"

export default function SeriesCardsTwo({pic}) {
  return (
    <div className=''>
      <img src={pic} alt="" className={styles.seriesimg} />
    </div>
  )
}
