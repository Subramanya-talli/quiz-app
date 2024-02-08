import { useState } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndofScreen from './Components/EndofScreen';
import { QuizContext } from './Components/Helper/QuizContext';



function App() {
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

        {gameState === "main" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endofscreen" && <EndofScreen />}

      </QuizContext.Provider>
    </div>
  );
}

export default App;
