/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginForm from 'src/components/Login/LoginForm';

// Action Creators
import { handleLoginChange, loginSubmit, loginReset } from 'src/store/reducer';

const mapStateToProps = state => ({
  password: state.loginForm.password,
  email: state.loginForm.email,
  loggedIn: state.loginForm.loggedIn,
  loading: state.loginForm.loading,
  error: state.loginForm.error
});

const mapDispatchToProps = dispatch => ({
  handleLoginChange: (text, name) => dispatch(handleLoginChange(text, name)),
  onLoginSubmit: () => dispatch(loginSubmit()),
  loginReset: () => dispatch(loginReset())
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

/**
 * Export
 */
export default LoginFormContainer;
