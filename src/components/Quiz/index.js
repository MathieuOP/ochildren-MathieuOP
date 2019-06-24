import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import Score from '../Score';

import './index.scss';

class Quiz extends Component {
  quizQuestion = React.createRef();

  componentDidMount() {
    const { getQuestionsByQuizId, quizId } = this.props;
    getQuestionsByQuizId(quizId);
  }

  handleClickAnswer = e => {
    const {
      questionsOfQuiz,
      getMessage,
      userResponse,
      disabledButton,
      indexQuiz,
      updateScore,
      userChosenAnswer
    } = this.props;
    
    const userAnswer = e.currentTarget.textContent.trim();
    const goodAnswer = questionsOfQuiz[indexQuiz].right_answer.content;
    const idCurrentQuestion = questionsOfQuiz[indexQuiz].id;

    if (disabledButton) {

      if (userAnswer === goodAnswer) {
        e.currentTarget.classList.add('quiz-responses--good'); 
        this.quizQuestion.current.classList.add('quiz-answer--good');

        const messageForUser = 'Bravo, tu as trouvé la bonne réponse !';

        userResponse(userAnswer, true, idCurrentQuestion);
        getMessage(messageForUser);
        updateScore();

      } 
      else {
        e.currentTarget.classList.add('quiz-responses--bad');
        this.quizQuestion.current.classList.add('quiz-answer--bad');

        const messageForUser = `Désolé! Mauvaise réponse. La réponse est ${goodAnswer}`;
        userResponse(userAnswer, false, idCurrentQuestion);
        getMessage(messageForUser);    

        const allAnswers = e.currentTarget.parentNode.childNodes;

        for (let i = 0; i < allAnswers.length; i++) {
          if (allAnswers[i].textContent.trim() === goodAnswer) {
            allAnswers[i].classList.add('quiz-responses--good');
          }
        }
      }
    }

    userChosenAnswer();
  };

  handleClickNextQuestion = () => {
    this.props.handleClickButtonNext();
    
    this.quizQuestion.current.classList.remove('quiz-answer--bad');
    this.quizQuestion.current.classList.remove('quiz-answer--good');
  };

  render() {
    const {
      loaded,
      myScore,
      descriptionCurrentQuiz,
      currentNameQuiz,
      questionsOfQuiz,
      indexQuiz,
      disabledButton,
      getMyScore,
      score,
      message,
      messageScore
    } = this.props;
    
    return loaded && !myScore ? (
      <div className="quiz">
        <h1>{descriptionCurrentQuiz}</h1>
        <div ref={this.quizQuestion} className="quiz-questions">
          <p className="quiz-question">{questionsOfQuiz[indexQuiz].content}</p>
          <div className="quiz-responses">
            {questionsOfQuiz[indexQuiz].answers.map(answer => {
              return (
                <p key={answer.id} onClick={this.handleClickAnswer}>
                  {answer.content}
                </p>
              );
            })}
          </div>
          {message !== '' && (
            <p
              className={
                questionsOfQuiz[indexQuiz].isRightUserResponse ? 'quiz-message quiz-message--good' : 'quiz-message quiz-message--bad'
              }
            >
              {message}
            </p>
          )}

          <p className="quiz-nbQuestions">
            {indexQuiz + 1} / {questionsOfQuiz.length}
          </p>

          {indexQuiz < questionsOfQuiz.length - 1 ? (
            <Button
              disabled={disabledButton}
              onClick={this.handleClickNextQuestion}
              className="quiz-button-next"
            >
              Question suivante
            </Button>
          ) : (
            <Button
              disabled={disabledButton}
              onClick={getMyScore}
              className="quiz-button-next"
            >
              Voir mon score
            </Button>
          )}
        </div>
      </div>
    ) : (
      myScore && (
        <Score
          score={score}
          arrayQuizzes={questionsOfQuiz}
          messageScore={messageScore}
          currentNameQuiz={currentNameQuiz}
        />
      )
    );
  }
}

Quiz.propTypes = {
  handleClickButtonNext: PropTypes.func.isRequired,
  questionsOfQuiz: PropTypes.arrayOf(PropTypes.object).isRequired,
  loaded: PropTypes.bool.isRequired,
  indexQuiz: PropTypes.number.isRequired,
  disabledButton: PropTypes.bool.isRequired,
  userChosenAnswer: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  myScore: PropTypes.bool.isRequired,
  getMyScore: PropTypes.func.isRequired,
  userResponse: PropTypes.func.isRequired,
  messageScore: PropTypes.string.isRequired,
  descriptionCurrentQuiz: PropTypes.string.isRequired,
  currentNameQuiz: PropTypes.string.isRequired,
  getQuestionsByQuizId: PropTypes.func.isRequired,
  quizId: PropTypes.string.isRequired,
};

export default Quiz;
