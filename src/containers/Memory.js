/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Memory from 'src/components/Memory';

// Action Creators
import { countPairs, memoryFinished, tentative, incrementeCountClick, resetCountClick, updatedData, updatedOpenedCard } from 'src/store/reducer';

const mapStateToProps = state => ({
  getCountPaire: state.getCountPaire,
  finished: state.finished,
  getTentative: state.getTentative,
  getCountClick: state.getCountClick,
  dataMemory: state.dataMemory,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Memory);
