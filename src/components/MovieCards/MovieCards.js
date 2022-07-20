import React from 'react'
import "./MovieCards.css"

export default function MovieCards({name, pic}) {
  return (
    <div className='card'>

        <img className='pic' src={pic} alt={name}/>
        <h2 className='name'> {name} </h2>

    </div>
  )
}
