import React from 'react'
import "./NotFoundPage.css"
import img1 from "../pics/404.jpg"
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='notfound-total' style={{ backgroundImage: `url(${img1})` }}>
      <div className='notfound-context'>
        <p className='text404'> 404 ERROR </p>
        <div className='notfoundline'></div>
        <div className='pagenotfound-container'>
          <p className='pagenotfound'> Page not found </p>
          <Link to="/" className='getout-btn-link' > GO HOME ! </Link>
        </div>
        {/* <div className='getout'>
          <p className='getout-text'> Lets get out of here : </p>
          <Link to="/" className='getout-link' > HOME </Link>
        </div> */}
      </div>
    </div>
  )
}
