/*eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useHistory, Link } from 'react-router-dom'

const FilmIndividual = ({ question, correct_answer, incorrect_answers }) => {
  // const params = useParams()
  // const history = useHistory()

  const [film, setFilm] = useState(null)

  useEffect(() => {
    // make our request for the cheese data
    const getData = async () => {
      const response = await axios.get('https://opentdb.com/api.php?amount=40&category=11&type=multiple')
      setFilm(response.data)
    }
    getData()
  }, [])

  // const handleDelete = async () => {
  //   await axios.delete(`http://ga-cheesebored.herokuapp.com/cheeses/${params.id}`, {
  //     headers: {
  //       Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //     },
  //   })
  //   history.push('/cheeses')
  // }

  if ( !film) return null
  // const { question, correct_asnwer, incorrect_answers } = film
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
            {/* { userIsOwner(user._id) &&
              <div className="buttons">
                <Link to={`/cheeses/${_id}/edit`} className="button is-warning">Edit</Link>
                <button onClick={handleDelete} className="button is-danger">Delete</button>
              </div>
            } */}
            <hr />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmIndividual