import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <>
    (
        <div className="navbar">
          <div className="logo">Navbar..</div>
           <ul className="nav-links">

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact-us</Link>
           </ul>
        </div>
 </>
  )
}

export default Header
