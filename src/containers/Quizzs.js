/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Quizzs from 'src/components/Quizzs';

// Action Creators
import {
  getQuestionsByQuizId,
  initialQuiz,
  getQuizByWorldId,
  toggleFavoris,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  quizzsByWorldId: state.quizzsByWorldId,
  nameCategoryQuiz: state.nameCategoryQuiz,
  loaded: state.quizzesLoaded
});

const mapDispatchToProps = dispatch => ({
  getQuestionsByQuizId: id => {
    dispatch(getQuestionsByQuizId(id));
  },
  initialQuiz: () => {
    dispatch(initialQuiz());
  },
  getQuizByWorldId: worldId => {
    dispatch(getQuizByWorldId(worldId));
  },
  toggleFavoris: quizId => {
    dispatch(toggleFavoris(quizId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quizzs);
