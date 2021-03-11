import React from 'react'


const FilmEasy = ({ question, correct_answer, incorrect_answers }) => {

  
  return (
    <>
      <h2>Question: {question}</h2>
      <h2>Answer: { correct_answer }</h2>
      <p>Wrong: { incorrect_answers }</p>
    </>
  )
}

export default FilmEasy