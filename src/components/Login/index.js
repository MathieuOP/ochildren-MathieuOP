/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';

// comps
import ForgottenPassword from '../../containers/ForgottenPassword';
import LoginForm from '../../containers/LoginForm';

import './style.scss';

const Login = ({ viewLogin, changeViewLogin, resetPassword }) => {
  const handleClick = currentView => () => {
    changeViewLogin(currentView);
  } 

  return (
    <Fragment>
      {viewLogin === 'login' && (
        <div className="login">
          { resetPassword && <p>Un nouveau mot de passe vous a été envoyé.</p> }
          <LoginForm />
          <a
            className="app-link"
            onClick={handleClick('forgottenPassword')}
          >
            Mot de passe oublié
          </a>
        </div>
      )}
      {viewLogin === 'forgottenPassword' && (
        <div id="forgotten-pw">
          <div className="forgotten-form">
            <ForgottenPassword />
            <a className="app-link" onClick={handleClick('login')}>
              Retourner sur la page précèdente
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Login;
