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
            case 'identifiant':
              return value.length <= 0;
            case 'firstName':
              return value.length <= 0;
            case 'lastName':
              return value.length <= 0;
            case 'email':
              return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);
            case 'password':
              this.setState({
                inputsErrors: this.verify.cond(
                  value !== this.props.confirmPasswordValue,
                  'confirmPassword'
                )
              });
              return value.length < 8;
            case 'confirmPassword':
              return value !== this.props.passwordValue;
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
    const {
      emailValue,
      firstNameValue,
      lastNameValue,
      passwordValue,
      confirmPasswordValue,
      identifiantValue
    } = this.props;
    return (
      <div className="form-user-details">
        <Form>
          <Form.Field>
            <label htmlFor="username">
              Identifiant
              <input
                id="username"
                placeholder="Entrez votre Identifiant"
                onChange={this.verifyChange('identifiant')}
                value={identifiantValue}
                style={{
                  borderColor: this.verify.verifyOne(
                    'identifiant',
                    identifiantValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne('identifiant', identifiantValue, err =>
                err
                  ? this.verify.errorComp("Cette identifiant n'est pas valide")
                  : this.verify.successComp('Cette identifiant est valide')
              )}
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="firstName">
              Prénom
              <input
                id="firstName"
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
            <label htmlFor="lastName">
              Nom
              <input
                id="lastName"
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
            <label htmlFor="email">
              Email
              <input
                id="email"
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
          <Form.Field>
            <label htmlFor="password">
              Mot de passe
              <input
                id="password"
                placeholder="Entrez votre mot de passe"
                onChange={this.verifyChange('password')}
                value={passwordValue}
                type="password"
                style={{
                  borderColor: this.verify.verifyOne(
                    'password',
                    passwordValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne('password', passwordValue, err =>
                err
                  ? this.verify.errorComp(
                      "Votre mot de passe n'est pas assez long" // eslint-disable-line indent
                    ) // eslint-disable-line indent
                  : this.verify.successComp('Ce mot de passe est valide')
              )}
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="confirmPassword">
              Confirmation du mot de passe
              <input
                id="confirmPassword"
                placeholder="Confirmez votre mot de passe"
                onChange={this.verifyChange('confirmPassword')}
                value={confirmPasswordValue}
                type="password"
                style={{
                  borderColor: this.verify.verifyOne(
                    'confirmPassword',
                    confirmPasswordValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne(
                'confirmPassword',
                confirmPasswordValue,
                err =>
                  err
                    ? this.verify.errorComp('Ce mot de passe ne corespond pas')
                    : this.verify.successComp('Ce mot de passe corespond')
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
