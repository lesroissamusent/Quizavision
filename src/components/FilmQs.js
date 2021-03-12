/*eslint-disable camelcase */

import React, { useState, useEffect } from 'react'


const FilmQs = ({ question, correct_answer, incorrect_answers }) => {
  const [userAnswer, setUserAnswer] = useState('')
  // const [counter, setCounter] = useState(0)

  const answers = [...incorrect_answers, correct_answer]
  
  
  // answers.map(answer => {
  //   while (answers.length < 4) 
  //     return answers[Math.floor(Math.random() * answers.length)]
  // })


  // individual page:
  // cheesebored cheesecard page
  // generate new id number every time the button is clicked - not creating anew page just generate new id, triggers a rerender and reload the page
  // refresh page pulls id number - handleclick pull new id number from get request
  // use a random index instead of the 


  // empty array
  // pull choices in 
  // randomize answers
  // put them into a new bit of state 
  // 

  const handleClick = event => {
    const userAnswer = event.target.value
    setUserAnswer(userAnswer)
  }

  //  const increaseCount = () => {
  //   setCounter(counter + 1)
  // }
  
  useEffect(() => {
    const checkAnswer = () => {
      if (userAnswer === correct_answer) {
        // console.log('RIGHT')
        // setCounter()
      } else if ((userAnswer === incorrect_answers[0]) || (userAnswer === incorrect_answers[1]) || (userAnswer === incorrect_answers[2])) {
        // console.log('WRONG')
      }
    }
    checkAnswer()
  }, [userAnswer])

  const shuffleAnswers = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    console.log(randomAnswer)

  }
  shuffleAnswers()



  // console.log(counter)

  // const handleNextQuestion = () => {

  // }

  return (
    <>
      <div className="container is-4by3">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title is-centered" dangerouslySetInnerHTML={{ __html: question }}></div>
          </div>
          <div className="card-content">
            <button value={correct_answer} onClick={handleClick} className="{userAnswer ? 'correct' : ''}" dangerouslySetInnerHTML={{ __html: correct_answer }}></button>
            <button value={incorrect_answers[0]} onClick={handleClick} className="{userAnswer === incorrect_answers[0] ? 'incorrect' : ''}"> { incorrect_answers[0] }</button>
            <button value={incorrect_answers[1]} onClick={handleClick} className="{userAnswer === incorrect_answers[1] ? 'incorrect' : ''}"> { incorrect_answers[1] }</button>
            <button value={incorrect_answers[2]} onClick={handleClick} className="{userAnswer === incorrect_answers[2] ? 'incorrect' : ''}"> { incorrect_answers[2] }</button> 
          </div>
        </div>
      </div>
      

      {/* <button onClick={handleNextQuestion}>Next question</button> */}
    </>
  )
}

export default FilmQs



{/* <>
<h2>Question: {question}</h2>

<button value={correct_answer} onClick={handleClick, increaseCount} className={userAnswer ? 'correct' : ''}> { correct_answer }</button>
<button value={incorrect_answers[0]} onClick={handleClick} className={userAnswer === incorrect_answers[0] ? 'incorrect' : ''}> { incorrect_answers[0] }</button>
<button value={incorrect_answers[1]} onClick={handleClick} className={userAnswer === incorrect_answers[1] ? 'incorrect' : ''}> { incorrect_answers[1] }</button>
<button value={incorrect_answers[2]} onClick={handleClick} className={userAnswer === incorrect_answers[2] ? 'incorrect' : ''}> { incorrect_answers[2] }</button>

<button></button>
</>
) */}
