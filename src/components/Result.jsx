import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div className="result-box">
      <h2>Quiz Complete!</h2>
      <p>You scored {score} out of {total}</p>
      <button onClick={onRestart} className="restart-btn">Restart</button>
    </div>
  );
}

export default Result;
