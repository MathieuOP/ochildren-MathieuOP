/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';

// Action Creators
import { dataForHomePage } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  dataForHomePage: () => {
    dispatch(dataForHomePage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
