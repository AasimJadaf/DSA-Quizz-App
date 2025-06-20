import React from 'react';
import './Quiz.css';

function Quiz({ questionData, current, total, onAnswer }) {
  return (
    <div className="quiz-box">
      <h2>Question {current + 1} of {total}</h2>
      <p className="question-text">{questionData.question}</p>
      <ul className="options-list">
        {questionData.options.map((opt, index) => (
          <li key={index}>
            <button className="option-btn" onClick={() => onAnswer(opt.isCorrect)}>
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
