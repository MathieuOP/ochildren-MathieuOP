/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';

// comps
import ForgottenPassword from '../../containers/ForgottenPassword';
import LoginForm from '../../containers/LoginForm';

import './style.scss';

class Login extends Component {
  state = {
    view: 'login'
  };

  changeView = view => () => {
    this.setState({
      view
    });
  };

  render() {
    const { view } = this.state;
    return (
      <Fragment>
        {view === 'login' && (
          <div className="login">
            <LoginForm />
            <a
              className="app-link"
              onClick={this.changeView('forgottenPassword')}
            >
              Mot de passe oublié
            </a>
          </div>
        )}
        {view === 'forgottenPassword' && (
          <div id="forgotten-pw">
            <div className="forgotten-form">
              <ForgottenPassword />
              <a className="app-link" onClick={this.changeView('login')}>
                Retourner sur la page précèdente
              </a>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Login;
