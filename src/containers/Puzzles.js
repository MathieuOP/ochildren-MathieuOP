/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Puzzles from 'src/components/Puzzles';

// Action Creators

const mapStateToProps = (state, ownProps) => ({
  puzzles: state.puzzles.filter(puzzle => puzzle.world.id == ownProps.worldId),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzles);
