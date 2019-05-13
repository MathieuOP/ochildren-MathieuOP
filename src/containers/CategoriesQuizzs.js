/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import CategoriesQuizzs from 'src/components/CategoriesQuizzs';

// Action Creators
import {
  getAllCategoriesQuizzs,
  currentSlugCatQuizzs,
  getQuizzsById
} from 'src/store/reducer';

const mapStateToProps = state => ({
  categoriesQuizzs: state.categoriesQuizzs,
  slugCatAge: state.currentSlugCatAge
});

const mapDispatchToProps = dispatch => ({
  getAllCategoriesQuizzs: () => {
    dispatch(getAllCategoriesQuizzs());
  },
  currentSlugCatQuizzs: slugCatQuiz => {
    dispatch(currentSlugCatQuizzs(slugCatQuiz));
  },
  getQuizzsById: id => {
    dispatch(getQuizzsById(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesQuizzs);
