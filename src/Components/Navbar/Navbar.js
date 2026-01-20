import React from 'react'
import "./Navbar.css"
import phone from '../../assets/phone.png'



const Navbar = () => {
  return (
    <div className='container'>
<nav className='navbar'>
    <div >
    <ul className='nav-icon'>
        <li>
    <i className="fa-solid fa-envelope"></i>
    <span className='email'>rsaad6421@gmail.com</span>
    </li>
    <li>
    <img className='phone-icon' src={phone} alt="phone" />
    <span className='phone'>03161642540</span>
    </li>
</ul>
</div>
<div className='social-icon'>
<span><i className="fa-brands fa-facebook-f"></i></span>
<span><i className="fa-brands fa-twitter"></i></span>
<span><i className="fa-brands fa-instagram"></i></span>
<span><i className="fa-brands fa-pinterest"></i></span>
</div>

</nav>
    </div> 
  )
}

export default Navbar