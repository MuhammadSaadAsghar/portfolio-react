import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
         <div className="Footer-text">
        <h1 className="Footer-h1">Prixima</h1>
        <p className="Footer-p1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          similique sit aperiam quo <br />amet dolorem quis mollitia doloribus
          dolorum! Optio.
        </p>
        <div className='social-icon footer-icon'>
<span><i className="fa-brands fa-facebook-f"></i></span>
<span><i className="fa-brands fa-twitter"></i></span>
<span><i className="fa-brands fa-instagram"></i></span>
<span><i className="fa-brands fa-pinterest"></i></span>
</div>
<div>
    <ul className='footer-link'>
        <li><a className='f-icon' href="/">privicy</a></li>
        <li><a className='f-icon' href="/">terms</a></li>
        <li><a className='f-icon' href="/">disclaimers</a></li>
    </ul>
</div>
      </div>
    </div>
  )
}

export default Footer