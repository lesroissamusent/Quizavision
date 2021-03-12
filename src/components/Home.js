import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1 className="home">QUIZAVISION</h1>
      <h2 className="title">Pick a category and test your trivia knowledge!</h2>
      <div className="our-container">
        <Link to="/film">
          <div className="box title is-3 film">
            <h3>Film</h3>
          </div>
        </Link>
        <Link to="/tv">
          <div className="box title is-3 tv">
            <h3>TV</h3>
          </div>
        </Link>
      </div>
      {/* <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with <strong>love</strong>. 
          </p>
        </div>
      </footer> */}
    </>
  )
}

export default Home