import axios from 'axios';
import {
  DATA_HOME_PAGE,
  SIGNUP_SUBMIT,
  signedUp,
  signeUpToggleError
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

    case SIGNUP_SUBMIT:
      next(action);

      const {
        firstName,
        lastName,
        email,
        identifiant,
        password,
        confirmPassword
      } = store.getState().registerForm;

      const object = {
        email,
        plainpassword: password,
        plainpassword2: confirmPassword,
        firstName: `${firstName} ${lastName}`,
        username: identifiant
      };

      return axios
        .post(
          'http://92.243.9.67/plateforme-educative-api/public/api/signup',
          object
        )
        .then(({ data }) => store.dispatch(signedUp(data)))
        .catch(() => store.dispatch(signeUpToggleError()));

    default:
      return next(action);
  }
};

export default ajaxMiddleware;
