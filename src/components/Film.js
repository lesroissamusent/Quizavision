import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmEasy from './FilmEasy'

const Film = () => {
  const [filmData, setFilmData] = useState(null)
  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=40&category=11&type=multiple')
      setFilmData(data) 
    }
    getData()
  }, [])

  return (
    <>
      <h1>FILM</h1>
      <div className="section">
        <div className="container is-flex-wrap-wrap">
          { filmData && 
            <div className="columns is-multiline">
              {filmData.results.map(film => (
                <FilmEasy key={film} {...film} />
              ))}
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Film