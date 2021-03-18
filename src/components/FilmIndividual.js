/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FilmIndividual = ({ question, correct_answer, incorrect_answers }) => {

  const [film, setFilm] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://opentdb.com/api.php?amount=40&category=11&type=multiple')
      setFilm(response.data)
    }
    getData()
  }, [])

  if ( !film) return null
  return (
    <section className="section">
      <div className="container is-fluid">
        <div>
          <h2 className="title has-text-centered">{ question }</h2>
          <hr />
          <div className="">
  
            <p>{ correct_answer }</p>
            <hr />
            <p>{ incorrect_answers }</p>
            <hr />
            <hr />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmIndividual