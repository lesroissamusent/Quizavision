import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1 className="home">TRIVIA</h1>
      <h2 className="title is-3">Pick a category and test your trivia knowledge!</h2>
      <div className="our-container">
        <Link to="/film">
          <div className="box title is-3">
            <h3>Film</h3>
          </div>
        </Link>
        <Link to="/tv">
          <div className="box title is-3">
            <h3>TV</h3>
          </div>
        </Link>
        <div className="box title is-3">
          <h3>Theatre/Muscials</h3>
        </div>
        <div className="box title is-3">
          <h3>Music</h3>
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