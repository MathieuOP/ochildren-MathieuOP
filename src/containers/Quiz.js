/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Quiz from 'src/components/Quiz';

// Action Creators
import { handleClickButtonNext } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  indexQuiz: state.indexQuiz,
  datas: state.datas,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickButtonNext: () => {
    dispatch(handleClickButtonNext());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);
