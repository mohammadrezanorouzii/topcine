import React from 'react'
import "./SeriesCards.css"

export default function SeriesCards({pic}) {
  return (
    <div className=''>
      <img src={pic} alt="" className='series-img' />
    </div>
  )
}
