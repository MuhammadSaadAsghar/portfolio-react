import React from 'react'
import './Navbarbottom.css'

const navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar-bottom'>
        <div className='heading'>
       <h1>Prixima</h1>
       </div>
       <div className='container-field'>
        <ul>
        <li className='nav-item'>
        <a className='nav-link' href="/">Home</a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">About </a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">services</a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">Portfolio</a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">Team</a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">Reviews</a>
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/">Blog</a>
        </li>
        <button className='icon-button'>Contact</button>
        </ul>
        
       </div>
      </nav>

    </div>
  )
}

export default navbar