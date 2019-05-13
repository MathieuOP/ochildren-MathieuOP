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
  answerIsTrue,
  messageScore
} from 'src/store/reducer';

const mapStateToProps = state => ({
  questionsOfQuiz: state.questionsOfQuiz,
  responses: state.responses,
  loading: state.loading,
  indexQuiz: state.indexQuiz,
  disabledButton: state.disabledButton,
  message: state.message,
  score: state.score,
  myScore: state.myScore,
  answerTrue: state.answerTrue,
  messageScore: messageScore(state)
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
  answerIsTrue: () => {
    dispatch(answerIsTrue());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
