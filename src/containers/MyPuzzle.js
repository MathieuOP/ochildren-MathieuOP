/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import MyPuzzle from 'src/components/MyPuzzle';

// Action Creators
import { dataForPuzzle } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  puzzle: state.puzzle,
  loaded: state.loaded,
});

const mapDispatchToProps = dispatch => ({
  dataForPuzzle: (puzzleId) => {
    dispatch(dataForPuzzle(puzzleId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPuzzle);
