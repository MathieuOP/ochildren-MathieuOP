/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Register from 'src/components/Register';

// Action Creators
import {
  registerInputChange,
  signupSubmit,
  signeUpReset
} from 'src/store/reducer';

const mapStateToProps = state => ({
  emailValue: state.registerForm.email,
  firstNameValue: state.registerForm.firstName,
  lastNameValue: state.registerForm.lastName,
  identifiantValue: state.registerForm.identifiant,
  passwordValue: state.registerForm.password,
  confirmPasswordValue: state.registerForm.confirmPassword,
  loading: state.registerForm.loading,
  signedUp: state.registerForm.signedUp,
  error: state.registerForm.error
});

const mapDispatchToProps = dispatch => ({
  handleRegisterChange: name => e =>
    dispatch(registerInputChange(e.target.value, name)),
  signupSubmit: () => dispatch(signupSubmit()),
  signeUpReset: () => dispatch(signeUpReset())
});

// Container
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

/**
 * Export
 */
export default RegisterContainer;
