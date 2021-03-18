import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-item">
        <Link to="/" className="navbar-start">
          HOME
        </Link>
      </div>
    </nav>
  )
}

export default Navbar