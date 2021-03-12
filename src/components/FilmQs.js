/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'


const FilmEasy = ({ question, correct_answer, incorrect_answers }) => {
  const [userAnswer, setUserAnswer] = useState('')
  // const [counter, setCounter] = useState(0)

  // const answers = [...incorrect_answers, correct_answer]
  
  
  // answers.map(answer => {
  //   while (answers.length < 4) 
  //     return answers[Math.floor(Math.random() * answers.length)]
  // })

  const handleClick = event => {
    const userAnswer = event.target.value
    setUserAnswer(userAnswer)
  }

  // const increaseCount = () => {
  //   setCounter(counter + 1)
  // }
  

  useEffect(() => {
    const checkAnswer = () => {
      if (userAnswer === correct_answer) {
        console.log('RIGHT')
      } else if ((userAnswer === incorrect_answers[0]) || (userAnswer === incorrect_answers[1]) || (userAnswer === incorrect_answers[2])) {
        console.log('WRONG')
      }
    }
    checkAnswer()
  }, [userAnswer])

  // console.log(counter)

  // const handleNextQuestion = () => {

  // }

  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title is-centered">{question}</div>
          </div>
        
          <div className="card-content">
            <button value={correct_answer} onClick={handleClick} className="button {userAnswer ? 'correct' : ''}" > { correct_answer }</button>
            <button value={incorrect_answers[0]} onClick={handleClick} className="button {userAnswer === incorrect_answers[0] ? 'incorrect' : ''}"> { incorrect_answers[0] }</button>
            <button value={incorrect_answers[1]} onClick={handleClick} className="button {userAnswer === incorrect_answers[1] ? 'incorrect' : ''}"> { incorrect_answers[1] }</button>
            <button value={incorrect_answers[2]} onClick={handleClick} className="button {userAnswer === incorrect_answers[2] ? 'incorrect' : ''}"> { incorrect_answers[2] }</button>
          </div>
        </div>
      </div>
      

      {/* <button onClick={handleNextQuestion}>Next question</button> */}
    </>
  )
}

export default FilmEasy



{/* <>
<h2>Question: {question}</h2>

<button value={correct_answer} onClick={handleClick, increaseCount} className={userAnswer ? 'correct' : ''}> { correct_answer }</button>
<button value={incorrect_answers[0]} onClick={handleClick} className={userAnswer === incorrect_answers[0] ? 'incorrect' : ''}> { incorrect_answers[0] }</button>
<button value={incorrect_answers[1]} onClick={handleClick} className={userAnswer === incorrect_answers[1] ? 'incorrect' : ''}> { incorrect_answers[1] }</button>
<button value={incorrect_answers[2]} onClick={handleClick} className={userAnswer === incorrect_answers[2] ? 'incorrect' : ''}> { incorrect_answers[2] }</button>

<button></button>
</>
) */}
