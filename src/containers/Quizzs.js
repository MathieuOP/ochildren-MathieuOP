/**
 * Npm import
 */
import { connect } from 'react-redux';
import slugify from 'slugify';
/**
 * Local import
 */
import Quizzs from 'src/components/Quizzs';

// Action Creators
import { getQuestionsByQuizId, initialQuiz } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  quizzs: state.quizzsByCategoryId.filter(quizzs => {
    if ( (slugify(quizzs.name) === state.currrentSlugCatQuizzs) && slugify(quizzs.quizzs[0].world.name) === state.currentSlugCatAge) {
      return quizzs;
    }
  }),
  currentSlugCatAge: state.currentSlugCatAge,
  currrentSlugCatQuizzs: state.currrentSlugCatQuizzs,
});

const mapDispatchToProps = dispatch => ({
  getQuestionsByQuizId: (id) => {
    dispatch(getQuestionsByQuizId(id));
  },
  initialQuiz: () => {
    dispatch(initialQuiz());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quizzs);
