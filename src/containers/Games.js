/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Games from 'src/components/Games';

// Action Creators
import { dataForPuzzles, resetMemory } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  puzzles: state.puzzles,
  dataMemory: state.dataMemory.filter(memory => memory.world.id == ownProps.worldId),
});

const mapDispatchToProps = dispatch => ({
  dataForPuzzles: (worldId) => {
    dispatch(dataForPuzzles(worldId));
  },
  resetMemory: () => {
    dispatch(resetMemory());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Games);
