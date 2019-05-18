/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import HomeGame from 'src/components/HomeGame';

// Action Creators
import { dataForHomeGame } from 'src/store/reducer';

const mapStateToProps = state => ({
  dataHomeGame: state.dataHomeGame
});

const mapDispatchToProps = dispatch => ({
  dataForHomeGame: categoryId => {
    dispatch(dataForHomeGame(categoryId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeGame);
