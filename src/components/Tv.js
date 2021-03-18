import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TvQs from './TvQs'

const Tv = () => {
  const [tvData, setTvData] = useState(null)
  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=1&category=14&type=multiple')
      setTvData(data) 
    }
    getData()
  }, [])

  const handleClick = () => {
    const getData = async() => {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=1&category=14&type=multiple')
      setTvData(data) 
    }
    getData()
    
  }

  return (
    <>
      <h1>TV</h1>
      <div className="section">
        <div className="container is-flex-wrap-wrap is-fluid">
          { tvData && 
            <div className="columns is-multiline">
              {tvData.results.map(tv => (
                <TvQs key={tv} {...tv} />
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

export default Tv