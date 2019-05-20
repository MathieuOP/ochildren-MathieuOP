/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Memory from 'src/components/Memory';

// Action Creators
import { countPairs, memoryFinished, tentative, incrementeCountClick, resetCountClick, updatedData, updatedOpenedCard, resetMemory} from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  getCountPaire: state.getCountPaire,
  finished: state.finished,
  getTentative: state.getTentative,
  getCountClick: state.getCountClick,
  dataMemory: state.dataMemory.find(memory => memory.id == ownProps.memoryId),
  openedCard: state.openedCard,
});

const mapDispatchToProps = dispatch => ({
  incrementeCountClick: () => {
    dispatch(incrementeCountClick());
  },
  memoryFinished: () => {
    dispatch(memoryFinished());
  },
  countPairs: () => {
    dispatch(countPairs());
  },
  tentative: () => {
    dispatch(tentative());
  },
  resetCountClick: () => {
    dispatch(resetCountClick());
  },
  updatedData: (data) => {
    dispatch(updatedData(data));
  },
  updatedOpenedCard: (data) => {
    dispatch(updatedOpenedCard(data));
  },
  resetMemory: () => {
    dispatch(resetMemory());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Memory);
