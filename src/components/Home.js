import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1 className="title is-1">TRIVIA</h1>
      <h2 className="title is-3">Pick a category and test your trivia knowledge!</h2>
      <div className="our-container">
        <Link to="/film">
          <div className="box">
            <h2>Film</h2>
          </div>
        </Link>
        <Link to="/tv">
          <div className="box">
            <h2>TV</h2>
          </div>
        </Link>
        <div className="box">
          <h2>Theatre/Muscials</h2>
        </div>
        <div className="box">
          <h2>Music</h2>
        </div>

      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with <strong>love</strong>. 
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home