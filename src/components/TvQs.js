/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'


const TvQs = ({ question, correct_answer, incorrect_answers }) => {
  const [userAnswer, setUserAnswer] = useState('')

  const answers = [...incorrect_answers, correct_answer]


  const handleClick = event => {
    const userAnswer = event.target.value
    setUserAnswer(userAnswer)
  }

  useEffect(() => {
    const checkAnswer = () => {
      if (userAnswer === correct_answer) {
        // console.log('RIGHT')
        // setCounter()
      } else if ((userAnswer === incorrect_answers[0]) || (userAnswer === incorrect_answers[1]) || (userAnswer === incorrect_answers[2])) {
        // console.log('WRONG'
      }
    }
    checkAnswer()
  }, [userAnswer])

  const shuffleAnswers = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    console.log(randomAnswer)

  }
  shuffleAnswers()


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title is-centered" dangerouslySetInnerHTML={{ __html: question }}></div>
          </div>
          <div className="card-content">
            <button value={correct_answer} onClick={handleClick} className={userAnswer === correct_answer ? 'correct' : ''} dangerouslySetInnerHTML={{ __html: correct_answer }}></button>
            <button value={incorrect_answers[0]} onClick={handleClick} className={userAnswer === incorrect_answers[0] ? 'incorrect' : ''} dangerouslySetInnerHTML={{ __html: incorrect_answers[0] }}></button>
            <button value={incorrect_answers[1]} onClick={handleClick} className={userAnswer === incorrect_answers[1] ? 'incorrect' : ''} dangerouslySetInnerHTML={{ __html: incorrect_answers[1] }}></button>
            <button value={incorrect_answers[2]} onClick={handleClick} className={userAnswer === incorrect_answers[2] ? 'incorrect' : ''} dangerouslySetInnerHTML={{ __html: incorrect_answers[2] }}></button> 
          </div>
        </div>
      </div>

    </>
  )
}

export default TvQs
