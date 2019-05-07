/**
 * Npm import
 */
import {
  connect
} from 'react-redux';

/**
 * Local import
 */
import ForgottenPassword from 'src/components/Login/ForgottenPassword';

// Action Creators
import {
  handleLoginChange,
  // onLoginSubmit
} from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  email: state.userForm.email
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: (text, name) => console.log(text) && dispatch(handleLoginChange(text, name)),
  // onLoginSubmit: () => dispatch(onLoginSubmit()),
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const ForgottenPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);

/**
 * Export
 */
export default ForgottenPasswordContainer;
