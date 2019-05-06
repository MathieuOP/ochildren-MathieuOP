/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import ForgottenPassword from './ForgottenPassword';
import LoginForm from './LoginForm';

import './style.scss';

class Login extends Component {
  state = {
    view: 'login',
    
  }

  changeView = view => () => {
    this.setState({
      view,
    });
  }

  render(){
    const { view } = this.state;
    if (view === 'login') return <LoginForm />;
    if (view === 'forgottenPassword') return <ForgottenPassword />;
    return (
      <Fragment>
        { view === 'login' && <LoginForm /> }
        { view === 'forgottenPassword' && (
          <div className='login'> 
            <ForgottenPassword />
            <a className="app-link">Mot de passe oublié</a>
          </div>
        ) }
      </Fragment>
    );
  }
}




export default Login;
