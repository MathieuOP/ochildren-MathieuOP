/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import VerifyForm from '../../modules/verifyForm';

import './style.scss';

class FormUserDetails extends VerifyForm {
  constructor(props) {
    super(props);
    this.verify.init(['firstName', 'lastName', 'email']);

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

  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  verifyChange = name => e => {
    const { value } = e.target;
    this.setState({
      inputsErrors: this.verify.cond(
        (() => {
          switch (name) {
            case 'firstName':
              return value.length <= 0;
            case 'lastName':
              return value.length <= 0;
            case 'email':
              return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);
            default:
              return false;
          }
        })(),
        name
      )
    });
    this.props.handleRegisterChange(name)(e);
  };

  render() {
    const { emailValue, firstNameValue, lastNameValue } = this.props;
    return (
      <div className="form-user-details">
        <Form>
          <Form.Field>
            <label>
              Prénom
              <input
                placeholder="Entrez votre Prénom"
                onChange={this.verifyChange('firstName')}
                value={firstNameValue}
                style={{
                  borderColor: this.verify.verifyOne(
                    'firstName',
                    firstNameValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne('firstName', firstNameValue, err =>
                err
                  ? this.verify.errorComp("Ce prénom n'est pas valide")
                  : this.verify.successComp('Ce prénom est valide')
              )}
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              Nom
              <input
                placeholder="Entrez votre Nom"
                onChange={this.verifyChange('lastName')}
                value={lastNameValue}
                style={{
                  borderColor: this.verify.verifyOne(
                    'lastName',
                    lastNameValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne('lastName', lastNameValue, err =>
                err
                  ? this.verify.errorComp("Ce nom n'est pas valide")
                  : this.verify.successComp('Ce nom est valide')
              )}
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              Email
              <input
                placeholder="Entrez votre Email"
                onChange={this.verifyChange('email')}
                value={emailValue}
                style={{
                  borderColor: this.verify.verifyOne('email', emailValue, err =>
                    err ? 'red' : 'green'
                  )
                }}
              />
              {this.verify.verifyOne('email', emailValue, err =>
                err
                  ? this.verify.errorComp("Cette email n'est pas valide")
                  : this.verify.successComp('Cette email est valide')
              )}
            </label>
          </Form.Field>
          <Button
            disabled={this.verify.verifyAll()}
            id="continue-button"
            primary
            onClick={this.continue}
          >
            Continuer
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormUserDetails;
