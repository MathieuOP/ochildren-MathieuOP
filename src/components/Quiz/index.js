import React from 'react';
import GameMenu from '../GameMenu';

import './index.scss';


const Quiz = ({ handleClickButtonNext, indexQuiz, datas}) => {

  return (
    <div className="quiz">
      <div className="quiz-questions">
          <p className="quiz-question">{datas[indexQuiz].question}</p>
          <p className="quiz-response">{datas[indexQuiz].response}</p>
          {
            (indexQuiz < datas.length - 1) && (
              <button
                onClick={handleClickButtonNext}
                className="quiz-button-next"
                type="button"
              >
                Question suivante
              </button>
            )
          }
          
      </div>
      <GameMenu />
    </div>
  )
}

export default Quiz;
