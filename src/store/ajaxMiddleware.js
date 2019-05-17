import axios from 'axios';
import {
  DATA_HOME_PAGE,
  SIGNUP_SUBMIT,
  LOGIN_SUBMIT,
  signedUp,
  signeUpError,
  loggedIn,
  loginError
} from './reducer';

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case DATA_HOME_PAGE:
      return axios
        .get('http://localhost/Ochildren-Back/public/api/worlds')
        .then(response => {
          store.dispatch(
            next({
              ...action,
              data: response.data
            })
          );
        });

    case LOGIN_SUBMIT:
      next(action);

      const {
        email: loginEmail,
        password: loginPassword
      } = store.getState().loginForm;

      const LoginObject = {
        username: loginEmail,
        password: loginPassword
      };

      return axios
        .post(
          'http://92.243.9.67/plateforme-educative-api/public/api/login',
          LoginObject
        )
        .then(({ data }) => store.dispatch(loggedIn(data.token)))
        .catch(() => store.dispatch(loginError()));

    case SIGNUP_SUBMIT:
      next(action);

      const {
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        username: signUpUsername,
        password: signUpPassword,
        confirmPassword: signUpConfirmPassword
      } = store.getState().registerForm;

      const signUpObject = {
        email: signUpEmail,
        firstName: `${signUpFirstName} ${signUpLastName}`,
        plainpassword: signUpPassword,
        plainpassword2: signUpConfirmPassword,
        username: signUpUsername
      };

      return axios
        .post(
          'http://92.243.9.67/plateforme-educative-api/public/api/signup',
          signUpObject
        )
        .then(() => store.dispatch(signedUp()))
        .catch(() => store.dispatch(signeUpError()));

    default:
      return next(action);
  }
};

export default ajaxMiddleware;
