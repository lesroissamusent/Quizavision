import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar has-background-info">
      <div className="container">
        <div className="navbar-brand">
          {/* <Link to="/">
            <span role="img" aria-label="logo" className="title">🧀</span>
          </Link> */}
          <Link to="/" className="navbar-item">
            TRIVIA
          </Link>
        </div>
      </div>
    </nav>
  )

}

export default Navbar