/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changeViewLogin } from 'src/store/reducer';

const mapStateToProps = state => ({
  viewLogin: state.viewLogin,
  resetPassword: state.loginForm.resetPassword,
});

const mapDispatchToProps = dispatch => ({
  changeViewLogin:  (currentView) => dispatch(changeViewLogin(currentView))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
