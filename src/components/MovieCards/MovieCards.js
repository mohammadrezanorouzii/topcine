import React from 'react'
import "./MovieCards.css"
import "@fontsource/epilogue";

export default function MovieCards({name, pic, imdb}) {
  return (
    <div className='card'>

        <img className='pic' src={pic} alt={name}/>
        <div className="context">
          <h2 className='name'> {name} </h2>
          <h3 className='imdb-rating'> {imdb} </h3>
        </div>

    </div>
  )
}
