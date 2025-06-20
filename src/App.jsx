


import React, { useState, useEffect } from 'react';
import questions from './data/questions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); 
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setTimeLeft(15); 
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setTimeLeft(15);
  };

  return (
    <div className="app">
      <h1>DSA Quiz App</h1>
      {finished ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <>
          <div className="timer">⏱ Time Left: {timeLeft}s!!</div>
          <Quiz
            questionData={questions[current]}
            current={current}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
}

export default App;
