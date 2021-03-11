/*eslint-disable camelcase */

import React from 'react'

// , { useState }
const FilmEasy = ({ question, correct_answer, incorrect_answers }) => {
  // const [userAnswer, setUserAnswer] = useState(null)

  const handleClick = event => {
  //   userAnswer = event.target.value
    console.log(event.target.value)
    
    if (event.target.value === 'correct') {
      return <button className='correct'></button>
    }

  }

  // }

  // const handleIncorrect = event => {
  //   console.log(event.target.value)
  //  className="correct"}

  return (
    <>
      <h2>Question: {question}</h2>

      <button onClick={handleClick} value="correct"> { correct_answer }</button>
      <button onClick={handleClick} value="incorrect"> { incorrect_answers[0] }</button>
      <button onClick={handleClick} value="incorrect"> { incorrect_answers[1] }</button>
      <button onClick={handleClick} value="incorrect"> { incorrect_answers[2] }</button>
    </>
  )
}

export default FilmEasy





// const answers = [
    
// ]
// const choices = answers[Math.floor(Math.random() * (answers.length))]

// console.log(choices)

// const answers = [correct_answer, incorrect_answers[0], incorrect_answers[1], incorrect_answers[2]]
// const choices = answers[Math.floor(Math.random() * (answers.length))]

// console.log(choices)