import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmQs from './FilmQs'

const Film = () => {
  const [filmData, setFilmData] = useState(null)
  
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=1&category=11&type=multiple')
      setFilmData(data) 
    }
    getData()
  }, [])

  const handleClick = () => {
    const getData = async() => {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=1&category=11&type=multiple')
      setFilmData(data) 
    }
    getData()
  }

  return (
    <>
      <h1>FILM</h1>
      <div className="section">
        <div className="container is-flex-wrap-wrap is-fluid">
          { filmData && 
            <div className="columns is-multiline">
              {filmData.results.map(film => (
                <FilmQs key={film} {...film} />
              ))}
            </div>
          }
        </div>
        <div className="next-div">
          <button onClick={handleClick} className="next">Next Question</button>
        </div>
      </div>
    </>
  )
}

export default Film