/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Header from 'src/components/Header';

import { logOut } from 'src/store/reducer';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: e => {
    e.preventDefault();
    dispatch(logOut());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
