/**
 * Npm import
 */
import {
  connect
} from 'react-redux';

/**
 * Local import
 */
import LoginForm from 'src/components/Login/LoginForm';

// Action Creators
import {
  handleloginChange,
  onLoginSubmit
} from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLoginChange: (text, name) => dispatch(handleloginChange(text, name)),
  onLoginSubmit: () => dispatch(onLoginSubmit()),
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

/**
 * Export
 */
export default LoginFormContainer;
