import React from 'react';
import './index.scss';

const Score = ({ score, messageScore, currentNameQuiz }) => {
  console.log(messageScore);
  return (
    <div className="score">
      <h1>Ton score pour le quiz: <span>{ currentNameQuiz }</span></h1>
      <div className="score-title">
        <h2> {score}/10</h2>
        <img
          src={`/src/assets/img/${messageScore}.svg`}
          alt=""
        />
      </div>
      <p className="score-message">
        {messageScore === 'bad' &&
          "Ce n'est pas grave, le principal c'est de s'amuser tu feras mieux la prochaine fois !"}
        {messageScore === 'good' && 'Bravo, tu as réussi le quiz !'}
      </p>
    </div>
  );
};

export default Score;
