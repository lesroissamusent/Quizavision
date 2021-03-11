import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1>TRIVIA</h1>
      <p>INSTRUCTIONS</p>
      <div className="our-container">
        <Link to="/film">
          <div>
            <h2>Film</h2>
          </div>
        </Link>
        <div>
          <h2>TV</h2>
        </div>
        <div>
          <h2>Theatre/Muscials</h2>
        </div>
        <div>
          <h2>Music</h2>
        </div>

      </div>
    </>
  )
}

export default Home