import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Score = ({ score, messageScore, currentNameQuiz, arrayQuizzes }) => {

  return (
    <div className="score">
      <h1>
        Ton score pour le quiz: <span>{currentNameQuiz}</span>
      </h1>
      <div className="score-title">
        <h2> {score}/{arrayQuizzes.length}</h2>
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

Score.propTypes = {
  score: PropTypes.number.isRequired,
  messageScore: PropTypes.string.isRequired,
  currentNameQuiz: PropTypes.string.isRequired,
  arrayQuizzes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Score;
