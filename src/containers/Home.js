/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Home from 'src/components/Home';

// Action Creators
import { dataForHomePage, infosCatAge } from 'src/store/reducer';

const mapStateToProps = state => ({
  dataHomePage: state.dataHomePage
});

const mapDispatchToProps = dispatch => ({
  dataForHomePage: () => {
    dispatch(dataForHomePage());
  },
  infosCatAge: (category, id) => {
    dispatch(infosCatAge(category, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
