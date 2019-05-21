/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Header from 'src/components/Header';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
