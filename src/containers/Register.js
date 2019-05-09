/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Register from 'src/components/Register';

// Action Creators
import { registerInputChange } from 'src/store/reducer';

const mapStateToProps = state => ({
  emailValue: state.registerForm.email,
  firstNameValue: state.registerForm.firstName,
  lastNameValue: state.registerForm.lastName,
  identifiantValue: state.registerForm.identifiant,
  birthdayValue: state.registerForm.birthday
});

const mapDispatchToProps = dispatch => ({
  handleRegisterChange: name => e =>
    dispatch(registerInputChange(e.target.value, name))
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

/**
 * Export
 */
export default RegisterContainer;
