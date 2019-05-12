import React from 'react';

import verifyForm from './index';

class Exemple extends verifyForm {
  constructor(props) {
    super(props);

    this.verify.init(['email', 'password']);

    this.verify.setErrorComp(text => (
      <span style={{ color: 'red' }}>{text}</span>
    ));
    this.verify.setSuccessComp(text => (
      <span style={{ color: 'green' }}>{text}</span>
    ));

    this.state = {
      errors: this.verify.inputs
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={e => {
            this.setState({
              errors: this.verify.cond(
                !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(e.target.value),
                'email'
              )
            });
          }}
        />
        {this.state.errors.email
          ? this.verify.errorComp('Invalid email')
          : this.verify.successComp('This email is valide')}

        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            this.setState({
              errors: this.verify.cond(
                e.target.value.length <= 5 || e.target.value.length >= 20,
                'password'
              )
            });
          }}
        />
        {this.state.errors.password
          ? this.verify.errorComp('Invalid password')
          : this.verify.successComp('This password is valide')}
      </form>
    );
  }
}
