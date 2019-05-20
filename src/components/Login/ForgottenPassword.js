import React, { Fragment } from 'react';
import { Button, Form } from 'semantic-ui-react';

import VerifyForm from '../../modules/verifyForm';

import './style.scss';

class ForgottenPassword extends VerifyForm {
  constructor(props) {
    super(props);

    this.verify.init(['email']);

    this.verify.setErrorComp(text => (
      <span style={{ color: 'red' }}>{text}</span>
    ));
    this.verify.setSuccessComp(text => (
      <span style={{ color: 'green' }}>{text}</span>
    ));

    this.state = {
      inputsErrors: this.verify.inputs
    };
  }

  handleEmailChange = name => e => {
    const { value } = e.target;
    this.props.handleChange(value, name);
    this.verify.cond(
      (() => {
        switch (name) {
          case 'email':
            return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);
          default:
            return false;
        }
      })(),
      name
    );
  };

  render() {
    const { email, handleForgottenSubmit } = this.props;
    return (
      <Fragment>
        <h1>Changez votre mot de passe</h1>
        <br />
        <p>Suivez les instructions ci-dessous</p>
        <br />
        <Form onSubmit={handleForgottenSubmit}>
          <Form.Field>
            <label htmlFor="email">
              Veuillez renseigner votre Email
              <input
                id="email"
                placeholder="Email"
                type="text"
                onChange={this.handleEmailChange('email')}
                value={email}
                style={{
                  borderColor: this.verify.verifyOne('email', email, err =>
                    err ? 'red' : 'green'
                  )
                }}
              />
            </label>
            {this.verify.verifyOne('email', email, error =>
              error
                ? this.verify.errorComp("Cette email n'est pas valide")
                : this.verify.successComp('Cette email est valide')
            )}
          </Form.Field>
          <Button disabled={this.verify.verifyAll()} id="new-pw" type="submit">
            ok
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default ForgottenPassword;
