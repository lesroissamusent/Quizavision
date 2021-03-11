/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'


const FilmEasy = ({ question, correct_answer, incorrect_answers }) => {
  const [userAnswer, setUserAnswer] = useState('')
  const [counter, setCounter] = useState(0)
  
  const handleClick = event => {
    const userAnswer = event.target.value
    setUserAnswer(userAnswer)
  }

  const increaseCount = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    const checkAnswer = () => {
      if (userAnswer === correct_answer) {
        return increaseCount()
      } else if ((userAnswer === incorrect_answers[0]) || (userAnswer === incorrect_answers[1]) || (userAnswer === incorrect_answers[2])) {
        return counter
      }
    }
    checkAnswer()
  }, [userAnswer])

  console.log(counter)


  return (
    <>
      <h2>Question: {question}</h2>

      <button value={correct_answer} onClick={handleClick, increaseCount} className={userAnswer ? 'correct' : ''}> { correct_answer }</button>
      <button value={incorrect_answers[0]} onClick={handleClick} className={userAnswer === incorrect_answers[0] ? 'incorrect' : ''}> { incorrect_answers[0] }</button>
      <button value={incorrect_answers[1]} onClick={handleClick} className={userAnswer === incorrect_answers[1] ? 'incorrect' : ''}> { incorrect_answers[1] }</button>
      <button value={incorrect_answers[2]} onClick={handleClick} className={userAnswer === incorrect_answers[2] ? 'incorrect' : ''}> { incorrect_answers[2] }</button>
    </>
  )
}

export default FilmEasy


