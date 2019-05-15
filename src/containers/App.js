/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators

const mapStateToProps = state => ({
  error404: state.error404,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
