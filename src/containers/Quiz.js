/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Quiz from 'src/components/Quiz';

// Action Creators
import {
  handleClickButtonNext,
  userChosenAnswer,
  updateScore,
  getMessage,
  getMyScore,
  userResponse,
  messageScore,
  getQuestionsByQuizId
} from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  questionsOfQuiz: state.questionsOfQuiz,
  responses: state.responses,
  loaded: state.questionLoaded,
  indexQuiz: state.indexQuiz,
  disabledButton: state.disabledButton,
  message: state.message,
  score: state.score,
  myScore: state.myScore,
  messageScore: messageScore(state, ownProps.arrayQuizzes.length),
  descriptionCurrentQuiz: state.descriptionCurrentQuiz,
  currentNameQuiz: state.currentNameQuiz
});

const mapDispatchToProps = dispatch => ({
  handleClickButtonNext: () => {
    dispatch(handleClickButtonNext());
  },
  userChosenAnswer: () => {
    dispatch(userChosenAnswer());
  },
  updateScore: () => {
    dispatch(updateScore());
  },
  getMessage: message => {
    dispatch(getMessage(message));
  },
  getMyScore: () => {
    dispatch(getMyScore());
  },
  userResponse: (userAnswer, bool, id) => {
    dispatch(userResponse(userAnswer, bool, id));
  },
  getQuestionsByQuizId: id => {
    dispatch(getQuestionsByQuizId(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
