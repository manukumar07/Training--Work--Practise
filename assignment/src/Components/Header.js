import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <>
        <div className="navbar">
        <img src='images/download.png' alt='logo' className='log'></img>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact-us</Link>
              <Link to="/main">Main</Link>
              <Link to="/services">Services</Link>
              <Link to="/fetchdata">FecthData</Link>

           </ul>
        </div>
 </>
  )
}

export default Header
