/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'


const FilmEasy = ({ question, correct_answer, incorrect_answers }) => {
  const [userAnswer, setUserAnswer] = useState('')

 
  const handleClick = event => {
    const userAnswer = event.target.value
    setUserAnswer(userAnswer)
  }

  useEffect(() => {
    const checkAnswer = () => {
      if (userAnswer === correct_answer) {
        console.log('RIGHT!') 
      } else if ((userAnswer === incorrect_answers[0]) || (userAnswer === incorrect_answers[1]) || (userAnswer === incorrect_answers[2])) {
        console.log('WRONG')
      }
    }
    checkAnswer()
  }, [userAnswer])
    



  return (
    <>
      <h2>Question: {question}</h2>

      <button value={correct_answer} onClick={handleClick} className={userAnswer ? 'correct' : ''}> { correct_answer }</button>
      <button value={incorrect_answers[0]} onClick={handleClick} className={userAnswer === incorrect_answers[0] ? 'incorrect' : ''}> { incorrect_answers[0] }</button>
      <button value={incorrect_answers[1]} onClick={handleClick} className={userAnswer === incorrect_answers[1] ? 'incorrect' : ''}> { incorrect_answers[1] }</button>
      <button value={incorrect_answers[2]} onClick={handleClick} className={userAnswer === incorrect_answers[2] ? 'incorrect' : ''}> { incorrect_answers[2] }</button>
    </>
  )
}

export default FilmEasy


// const array = ['hey', 'hello', 'bye']

// array.map((item, i) => {
//   return {
//     answer: item,
//     isCorrect: i === array.length - 1 ? true : false,
//   }
// })




// const answers = [
    
// ]
// const choices = answers[Math.floor(Math.random() * (answers.length))]

// console.log(choices)

// const answers = [correct_answer, incorrect_answers[0], incorrect_answers[1], incorrect_answers[2]]
// const choices = answers[Math.floor(Math.random() * (answers.length))]

// console.log(choices)