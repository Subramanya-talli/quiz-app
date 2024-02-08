import React, { useState, useContext } from 'react';
import { Question } from './Helper/Questions';
import { QuizContext } from './Helper/QuizContext';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, SetQuestion] = useState(0);
  const [optionChoosen, setoptionChoosen] = useState("")
  const nextQuestion = () => {
    if (Question[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    SetQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Question[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endofscreen");
  }

  return (
    <div className='Quiz'>

      <p>{Question[currQuestion].question}</p>
      <div className='options'>
        <button onClick={() => {
          setoptionChoosen("A")
        }}>{Question[currQuestion].optionA}</button>
        <button onClick={() => {
          setoptionChoosen("B")
        }}>{Question[currQuestion].optionB}</button>
        <button onClick={() => {
          setoptionChoosen("C")
        }}>{Question[currQuestion].optionC}</button>
        <button onClick={() => {
          setoptionChoosen("D")
        }}>{Question[currQuestion].optionD}</button>
      </div>
      {
        currQuestion == Question.length - 1 ?
          <button onClick={finishQuiz}>Finish Quiz</button> :
          <button onClick={nextQuestion}>Next Question</button>
      }
    </div>
  )
}

export default Quiz;