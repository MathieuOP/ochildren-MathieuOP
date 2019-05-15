/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import MyPuzzle from 'src/components/MyPuzzle';

// Action Creators

const mapStateToProps = (state, ownProps) => ({
  puzzle: state.puzzles.find(puzzle => puzzle.id == ownProps.puzzleId),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPuzzle);
