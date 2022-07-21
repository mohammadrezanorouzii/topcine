import React, { useState } from 'react'
import "./MovieCards.css"
import "@fontsource/epilogue";

export default function MovieCards({name, pic, imdb}) {


  const [hovering, setHovering] = useState(false)

  const changeHovering = () => {
    setHovering(true);
  }

  const falseHovering = () => {
    setHovering(false)
  }

  return (
    <div className='card' onMouseOver={changeHovering} >

        <div className='pic'>

        <img className='pic' src={pic} alt={name}/>
        {hovering && <div className="context">
          <h2 className='name'> {name} </h2>
          <h3 className='imdb-rating'> {imdb} </h3>
        </div>}

        </div>

    </div>
  )
}
