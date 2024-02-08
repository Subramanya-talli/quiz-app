import React, { useContext } from 'react';
import { QuizContext } from './Helper/QuizContext';
import { Question } from './Helper/Questions';

const EndofScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const reStartQuiz = () => {
    setScore(0);
    setGameState("main");
  }

  return (
    <div className='EndScreen'>
      <h2>Quiz is Finished</h2>
      <h3>{score}/{Question.length}</h3>
      <button onClick={reStartQuiz}>Restart</button>
    </div>
  )
}

export default EndofScreen;